# Mihisoft Technologies - Next.js Website

A modern, responsive website for Mihisoft Technologies built with Next.js, TypeScript, and Tailwind CSS. This project recreates the design and functionality of the original Rails application with modern web technologies and best practices.

## 🚀 Features

- **Modern Stack**: Built with Next.js 15, React 19, TypeScript, and Tailwind CSS
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Enhanced user experience with Framer Motion
- **SEO Optimized**: Built-in SEO optimization with Next.js
- **Performance**: Optimized for speed and performance
- **Accessibility**: Following WCAG guidelines for accessibility

## 🛠️ Technologies Used

- **Frontend Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React & React Icons
- **Image Optimization**: Next.js Image component
- **Development**: ESLint for code quality

## 📱 Sections

1. **Header** - Contact information and social media links
2. **Navigation** - Responsive navigation with dropdown menus
3. **Hero Section** - Eye-catching banner with call-to-action
4. **About Us** - Company information and statistics
5. **Services** - Comprehensive service offerings
6. **Projects** - Portfolio of completed projects
7. **Testimonials** - Client feedback and reviews
8. **Team** - Meet our professional team
9. **Career** - Job opportunities and company benefits
10. **Clients** - Trusted partners and client logos
11. **Contact** - Contact form and company information
12. **Footer** - Links, contact info, and social media

## 🏁 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mihisoft-nextjs
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Contact Form Email Setup (No Database)

The contact form sends emails through SMTP using a Next.js API route.

1. Copy environment template:
```bash
cp .env.example .env.local
```

2. Configure these values in `.env.local`:
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASSWORD`
- `CONTACT_TO_EMAILS` (comma-separated receivers)

Recommended local config:
```dotenv
NEXT_PUBLIC_SITE_URL=http://localhost:3000
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=mihisofttechnologies@gmail.com
SMTP_PASSWORD=your-gmail-app-password
CONTACT_TO_EMAILS=sales@mihisoft.com,support@mihisoft.com
CONTACT_ALLOWED_ORIGINS=http://localhost:3000,http://127.0.0.1:3000
```

For Gmail, create and use an App Password (do not use your normal Gmail password).

Optional security tuning:
- `CONTACT_RATE_LIMIT_MAX`
- `CONTACT_RATE_LIMIT_WINDOW_MS`
- `CONTACT_MAX_NAME_LENGTH`
- `CONTACT_MAX_PHONE_LENGTH`
- `CONTACT_MAX_SUBJECT_LENGTH`
- `CONTACT_MAX_MESSAGE_LENGTH`

3. Restart the dev server and submit the contact form.

Built-in anti-spam protections:
- Hidden honeypot field to block basic bots
- API rate limit (5 requests per IP per 10 minutes)

### Environment File Strategy

- Use `.env.local` for local development secrets (ignored by git)
- Use `.env.example` as the committed template (safe placeholders only)
- For staging/production, configure env variables in your hosting platform (do not commit `.env.production`)
- `.gitignore` already excludes `.env`, `.env.*`, and keeps only `.env.example`

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
mihisoft-nextjs/
├── public/
│   ├── images/          # Static images from original project
│   └── ...
├── src/
│   ├── app/
│   │   ├── globals.css  # Global styles
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Home page
│   └── components/
│       ├── Header.tsx
│       ├── Navigation.tsx
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── ServicesSection.tsx
│       ├── ProjectsSection.tsx
│       ├── TestimonialsSection.tsx
│       ├── TeamSection.tsx
│       ├── CareerSection.tsx
│       ├── ClientsSection.tsx
│       ├── ContactSection.tsx
│       └── Footer.tsx
├── package.json
└── README.md
```

## 🎨 Design Features

- **Smooth Scrolling**: Navigate between sections seamlessly
- **Hover Effects**: Interactive elements with smooth transitions
- **Loading Animations**: Staggered animations for better UX
- **Mobile-First**: Responsive design approach
- **Dark/Light Mode**: Consistent color scheme
- **Typography**: Clean and readable font hierarchy

## 📧 Contact Information

- **Email**: info@mihisoft.com
- **Phone**: +880 1771109794
- **Address**: 6/7, Block B, Mirpur 12, Pallabi, Dhaka 1216
- **Website**: [https://mihisoft.com](https://mihisoft.com)

## 🔗 Social Media

- [Facebook](https://www.facebook.com/mihisoft)
- [LinkedIn](https://www.linkedin.com/company/mihisoft)
- [YouTube](https://www.youtube.com/@mihisofttechnologies3793)
- [WhatsApp](https://wa.me/+8801771109794)

## 📄 License

This project is private and proprietary to Mihisoft Technologies.

## 🚀 Deployment

The project is optimized for deployment on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- AWS
- DigitalOcean

## 🤝 Contributing

This is a private project for Mihisoft Technologies. For contributions, please contact the development team.

---

Built with ❤️ by Mihisoft Technologies