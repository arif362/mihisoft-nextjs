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
  keywords: "Software Company, mihisoft, Mihisoft Technology, Mihisoft, Mihisoft Technologies, ruby on rails company, ruby rails development, php development, wordpress developer, web and mobile development, node js, ux ui design, software development company in bangladesh, test application, maintenance application, software company, developing mobile web applications, dot net framework, ruby rails blog, outsourcing. ruby on rails, ruby, Ruby on Rails, Laravel, PHP, software company in bangladesh, Php, .Net, Laravel, Ruby based software company in bangladesh",
  authors: [{ name: "Web Developer | Software Engineer" }],
  robots: "index, follow",
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
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" }
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
