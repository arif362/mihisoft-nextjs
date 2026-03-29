import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mihisoft Technologies Ltd. | Enterprise Software Development & Digital Transformation Partner",
  description: "Mihisoft Technologies - Professional software development company delivering quality solutions for Government, Fintech, Healthcare & E-commerce. Secure development practices, dedicated support, and on-time delivery for applications across Bangladesh and beyond.",
  keywords: [
    "enterprise software development",
    "government software solutions bangladesh",
    "fintech application development",
    "healthcare management system",
    "e-commerce enterprise solutions",
    "digital transformation services",
    "custom enterprise applications",
    "scalable software architecture",
    "mission-critical systems",
    "secure banking software",
    "secure software development",
    "PCI DSS software development",
    "microservices architecture",
    "cloud native applications",
    "DevOps consulting",
    "IT outsourcing bangladesh",
    "software development company bangladesh",
    "ruby on rails enterprise",
    "react enterprise applications",
    "mobile app development enterprise"
  ],
  authors: [{ name: "Mihisoft Technologies Ltd." }],
  robots: "index, follow",
  other: {
    "googlebot": "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    "bingbot": "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
  },
  openGraph: {
    title: "Mihisoft Technologies Ltd. | Enterprise Software Development & Digital Transformation Partner",
    description: "Professional software development company delivering quality solutions for Government, Fintech, Healthcare & E-commerce. Secure development practices with dedicated support.",
    url: "https://mihisoft.com/",
    siteName: "Mihisoft Technologies Ltd.",
    images: [
      {
        url: "https://mihisoft.com/images/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "Mihisoft Technologies Ltd. - Software Development Company",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://mihisoft.com/"
  },
  icons: {
    icon: [
      { url: "/favicon.svg", sizes: "32x32", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    shortcut: "/favicon.svg",
    apple: "/images/logo/icon.png",
  },
  metadataBase: new URL("https://mihisoft.com"),
  twitter: {
    card: "summary_large_image",
    title: "Mihisoft Technologies Ltd. | Enterprise Software Development Partner",
    description: "Trusted enterprise software partner for Government, Fintech, Healthcare & E-commerce. Mission-critical solutions with 99.9% uptime guarantee.",
    site: "@mihisoft",
    creator: "@mihisoft",
    images: ["https://mihisoft.com/images/logo/logo.png"],
  },
  verification: {},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#48C7EC" />
        <meta name="msapplication-TileColor" content="#48C7EC" />
        <meta name="msapplication-navbutton-color" content="#48C7EC" />
        
        {/* Facebook Meta Tags */}
        <meta property="article:publisher" content="https://www.facebook.com/mihisoft" />
        
        {/* Business Information */}
        <meta name="geo.region" content="BD-13" />
        <meta name="geo.placename" content="Dhaka" />
        <meta name="geo.position" content="23.8103;90.4125" />
        <meta name="ICBM" content="23.8103, 90.4125" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Mihisoft Technologies Ltd.",
              "url": "https://mihisoft.com",
              "logo": "https://mihisoft.com/images/logo/logo.png",
              "description": "Professional software development company delivering quality solutions for Government, Fintech, Healthcare & E-commerce sectors with secure development practices.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "6/7, Block B, Mirpur 12, Pallabi",
                "addressLocality": "Dhaka",
                "postalCode": "1216",
                "addressCountry": "BD"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+880-1771109794",
                "contactType": "customer service",
                "email": "info@mihisoft.com"
              },
              "sameAs": [
                "https://www.facebook.com/mihisoft",
                "https://www.linkedin.com/company/mihisoft",
                "https://www.youtube.com/@mihisofttechnologies3793"
              ],
              "foundingDate": "2024",
              "employee": [
                {
                  "@type": "Person",
                  "name": "Engr. Md.Asraful Islam",
                  "jobTitle": "Chairman"
                }
              ],
              "numberOfEmployees": "10-50",
              "industry": "Software Development",
              "serviceArea": {
                "@type": "Place",
                "name": "Worldwide"
              },
              "services": [
                "Enterprise Software Development",
                "Government & Public Sector Solutions", 
                "Fintech & Banking Applications",
                "Healthcare Management Systems",
                "E-Commerce Enterprise Platforms",
                "Digital Transformation Consulting",
                "Cloud Architecture & DevOps",
                "Mobile Enterprise Applications",
                "Custom Mission-Critical Systems"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Enterprise Software Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Government Software Solutions"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Fintech Application Development"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Healthcare IT Solutions"
                    }
                  }
                ]
              }
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
