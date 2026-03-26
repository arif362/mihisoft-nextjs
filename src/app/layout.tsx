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
  title: "Mihisoft Technologies Ltd. | Leading Software Development Company in Bangladesh",
  description: "Mihisoft Technologies - Expert software development company specializing in Ruby on Rails, Web & Mobile Applications. Successfully delivered 20+ projects across 9 countries. Outsource your RoR, PHP, .NET, iOS or Android project for innovative digital solutions.",
  keywords: [
    "Mihisoft Technologies",
    "software development company bangladesh",
    "ruby on rails company",
    "ruby rails development", 
    "php development",
    "laravel development",
    "wordpress developer",
    "web and mobile development",
    "node js development",
    "react development",
    "next js development",
    "ux ui design",
    "mobile app development",
    "ios android development",
    "custom software solutions",
    "IT outsourcing bangladesh",
    "software outsourcing",
    "e-commerce development",
    "web application development",
    "dot net development"
  ],
  authors: [{ name: "Mihisoft Technologies Ltd." }],
  robots: "index, follow",
  other: {
    "googlebot": "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    "bingbot": "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
  },
  openGraph: {
    title: "Mihisoft Technologies Ltd. | Leading Software Development Company",
    description: "Expert software development company specializing in Ruby on Rails, Web & Mobile Applications. Successfully delivered 20+ projects across 9 countries. Transform your business with innovative digital solutions.",
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
    title: "Mihisoft Technologies Ltd. | Leading Software Development Company",
    description: "Expert software development company specializing in Ruby on Rails, Web & Mobile Applications. 20+ projects delivered across 9 countries.",
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
              "description": "Expert software development company specializing in Ruby on Rails, Web & Mobile Applications. Successfully delivered 20+ projects across 9 countries.",
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
                "Software Development",
                "Ruby on Rails Development", 
                "Mobile App Development",
                "Web Development",
                "E-Commerce Solutions",
                "Custom Software Solutions"
              ]
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
