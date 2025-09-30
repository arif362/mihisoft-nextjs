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
  title: "Mihisoft Technologies Ltd. | Software Company, Ruby on Rails, Mobile And Web Applications Outsourcing Company",
  description: "Mihisoft Technologies - Expert in Ruby on Rails, Web, and Mobile. Completed more then 20 projects in 9 countries. Outsource your RoR, PHP, .NET, iOS or Android project to get quick response from our team. To build innovative products by the implementation of new & innovative technologies at par with",
  keywords: [
    "Software Company",
    "mihisoft", 
    "Mihisoft Technology",
    "Mihisoft",
    "Mihisoft Technologies",
    "ruby on rails company",
    "ruby rails development", 
    "php development",
    "wordpress developer",
    "web and mobile development",
    "node js",
    "ux ui design",
    "software development company in bangladesh",
    "test application",
    "maintenance application",
    "bequent",
    "team ruby",
    "rail team", 
    "software farm",
    "software company",
    "developing mobile web applications",
    "dot net framework",
    "ruby rails blog",
    "outsourcing",
    "ruby on rails",
    "ruby",
    "Ruby on Rails",
    "Laravel",
    "PHP",
    "software company in bangladesh",
    "Php",
    ".Net",
    "Laravel",
    "Ruby based software company in bangladesh"
  ],
  authors: [{ name: "Web Developer | Software Engineer" }],
  robots: "index, follow",
  googlebot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  other: {
    "bingbot": "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
  },
  openGraph: {
    title: "Mihisoft Technologies Ltd. | Software Company, Ruby on Rails, Mobile And Web Applications Outsourcing Company",
    description: "Mihisoft Technologies - Expert in Ruby on Rails, Web, and Mobile. Completed more then 20 projects in 9 countries. Outsource your RoR, PHP, .NET, iOS or Android project to get quick response from our team. To build innovative products by the implementation of new & innovative technologies at par with",
    url: "https://www.mihisoft.com/",
    siteName: "Mihisoft Technologies Ltd.",
    images: [
      {
        url: "https://www.mihisoft.com/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "Mihisoft Technologies Ltd.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.mihisoft.com/"
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  metadataBase: new URL("https://www.mihisoft.com"),
  twitter: {
    card: "summary_large_image",
    title: "Mihisoft Technologies Ltd. | Software Company, Ruby on Rails, Mobile And Web Applications Outsourcing Company",
    description: "Mihisoft Technologies - Expert in Ruby on Rails, Web, and Mobile. Completed more then 20 projects in 9 countries.",
    images: ["https://www.mihisoft.com/logo/logo.png"],
  },
  verification: {
    google: undefined,
    yandex: undefined,
    yahoo: undefined,
  },
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
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-navbutton-color" content="#2563eb" />
        
        {/* Facebook Meta Tags */}
        <meta property="article:publisher" content="http://www.facebook.com/mihisoft" />
        
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
              "url": "https://www.mihisoft.com",
              "logo": "https://www.mihisoft.com/logo/logo.png",
              "description": "Mihisoft Technologies - Expert in Ruby on Rails, Web, and Mobile. Completed more then 20 projects in 9 countries.",
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
              "foundingDate": "2020",
              "founder": {
                "@type": "Person",
                "name": "Engr. Md.Asraful Islam"
              },
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
