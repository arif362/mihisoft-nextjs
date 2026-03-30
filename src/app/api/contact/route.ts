import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

type ContactPayload = {
  name?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
  website?: string
}

const DEFAULT_RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const DEFAULT_MAX_REQUESTS_PER_WINDOW = 5
const DEFAULT_MAX_SUBJECT_LENGTH = 140
const DEFAULT_MAX_MESSAGE_LENGTH = 5000
const DEFAULT_MAX_NAME_LENGTH = 80
const DEFAULT_MAX_PHONE_LENGTH = 30

const requestStore = new Map<string, { count: number; resetAt: number }>()

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function getNumberEnv(name: string, fallback: number): number {
  const raw = process.env[name]
  if (!raw) return fallback
  const parsed = Number(raw)
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function hasHeaderInjection(value: string): boolean {
  return /[\r\n]/.test(value)
}

function isAllowedOrigin(request: Request): boolean {
  const origin = request.headers.get('origin')
  if (!origin) return true

  const allowedOrigins = (process.env.CONTACT_ALLOWED_ORIGINS || '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)

  if (allowedOrigins.length === 0) {
    return true
  }

  return allowedOrigins.includes(origin)
}

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get('x-forwarded-for')
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim()
  }

  return request.headers.get('x-real-ip') || 'unknown'
}

function isRateLimited(ip: string): boolean {
  const rateLimitWindowMs = getNumberEnv(
    'CONTACT_RATE_LIMIT_WINDOW_MS',
    DEFAULT_RATE_LIMIT_WINDOW_MS
  )
  const maxRequestsPerWindow = getNumberEnv(
    'CONTACT_RATE_LIMIT_MAX',
    DEFAULT_MAX_REQUESTS_PER_WINDOW
  )

  const now = Date.now()
  const current = requestStore.get(ip)

  if (!current || now > current.resetAt) {
    requestStore.set(ip, {
      count: 1,
      resetAt: now + rateLimitWindowMs,
    })
    return false
  }

  if (current.count >= maxRequestsPerWindow) {
    return true
  }

  requestStore.set(ip, {
    ...current,
    count: current.count + 1,
  })

  return false
}

export async function POST(request: Request) {
  try {
    if (!isAllowedOrigin(request)) {
      return NextResponse.json(
        { error: 'Invalid request origin.' },
        { status: 403 }
      )
    }

    const clientIp = getClientIp(request)

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const contentType = request.headers.get('content-type') || ''
    if (!contentType.includes('application/json')) {
      return NextResponse.json(
        { error: 'Invalid content type.' },
        { status: 415 }
      )
    }

    const body = (await request.json()) as ContactPayload

    const name = body.name?.trim() ?? ''
    const email = body.email?.trim() ?? ''
    const phone = body.phone?.trim() ?? ''
    const subject = body.subject?.trim() ?? ''
    const message = body.message?.trim() ?? ''
    const website = body.website?.trim() ?? ''

    const maxNameLength = getNumberEnv('CONTACT_MAX_NAME_LENGTH', DEFAULT_MAX_NAME_LENGTH)
    const maxPhoneLength = getNumberEnv('CONTACT_MAX_PHONE_LENGTH', DEFAULT_MAX_PHONE_LENGTH)
    const maxSubjectLength = getNumberEnv('CONTACT_MAX_SUBJECT_LENGTH', DEFAULT_MAX_SUBJECT_LENGTH)
    const maxMessageLength = getNumberEnv('CONTACT_MAX_MESSAGE_LENGTH', DEFAULT_MAX_MESSAGE_LENGTH)

    if (website) {
      return NextResponse.json({ ok: true })
    }

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Name, email, subject, and message are required.' },
        { status: 400 }
      )
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }

    if (
      name.length > maxNameLength ||
      phone.length > maxPhoneLength ||
      subject.length > maxSubjectLength ||
      message.length > maxMessageLength
    ) {
      return NextResponse.json(
        { error: 'One or more fields exceed allowed length.' },
        { status: 400 }
      )
    }

    if (hasHeaderInjection(name) || hasHeaderInjection(email) || hasHeaderInjection(subject)) {
      return NextResponse.json(
        { error: 'Invalid input.' },
        { status: 400 }
      )
    }

    const smtpHost = process.env.SMTP_HOST
    const smtpPort = Number(process.env.SMTP_PORT || 587)
    const smtpUser = process.env.SMTP_USER
    const smtpPassword = process.env.SMTP_PASSWORD

    if (!smtpHost || !smtpUser || !smtpPassword) {
      return NextResponse.json(
        { error: 'Email service is not configured on the server.' },
        { status: 500 }
      )
    }

    const recipientEmails = (
      process.env.CONTACT_TO_EMAILS ||
      process.env.CONTACT_TO_EMAIL ||
      process.env.CONTACT_EMAIL ||
      smtpUser
    )
      .split(',')
      .map((emailAddress) => emailAddress.trim())
      .filter(Boolean)

    if (recipientEmails.length === 0) {
      return NextResponse.json(
        { error: 'Contact receiver email is not configured.' },
        { status: 500 }
      )
    }

    const fromEmail = process.env.CONTACT_FROM_EMAIL || smtpUser

    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safePhone = escapeHtml(phone || 'N/A')
    const safeSubject = escapeHtml(subject)
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br/>')

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 20_000,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    })

    await transporter.verify()

    await transporter.sendMail({
      from: `Mihisoft Website <${fromEmail}>`,
      to: recipientEmails,
      replyTo: email,
      subject: `New Contact Form Submission: ${subject}`,
      text: [
        'You received a new contact form submission.',
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || 'N/A'}`,
        `Subject: ${subject}`,
        'Message:',
        message,
      ].join('\n'),
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Subject:</strong> ${safeSubject}</p>
        <p><strong>Message:</strong><br/>${safeMessage}</p>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}