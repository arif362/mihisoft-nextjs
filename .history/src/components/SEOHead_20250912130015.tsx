import Head from 'next/head'

interface SEOHeadProps {
  title?: string
  description?: string
  canonicalUrl?: string
  ogImage?: string
}

export default function SEOHead({ 
  title = "Mihisoft Technologies Ltd. | Software Company, Ruby on Rails, Mobile And Web Applications Outsourcing Company",
  description = "Mihisoft Technologies - Expert in Ruby on Rails, Web, and Mobile. Completed more then 20 projects in 9 countries. Outsource your RoR, PHP, .NET, iOS or Android project to get quick response from our team.",
  canonicalUrl = "https://www.mihisoft.com/",
  ogImage = "https://www.mihisoft.com/logo/logo.png"
}: SEOHeadProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mihisoft Technologies Ltd.",
    "url": "https://www.mihisoft.com",
    "logo": "https://www.mihisoft.com/logo/logo.png",
    "description": description,
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
  }

  return (
    <Head>
      {/* Additional Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      <meta name="msapplication-navbutton-color" content="#2563eb" />
      
      {/* Facebook Meta Tags */}
      <meta property="article:publisher" content="http://www.facebook.com/mihisoft" />
      <meta property="fb:app_id" content="" />
      
      {/* Additional OpenGraph */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />
      
      {/* Twitter Additional */}
      <meta name="twitter:creator" content="@mihisoft" />
      <meta name="twitter:site" content="@mihisoft" />
      
      {/* Business Information */}
      <meta name="geo.region" content="BD-13" />
      <meta name="geo.placename" content="Dhaka" />
      <meta name="geo.position" content="23.8103;90.4125" />
      <meta name="ICBM" content="23.8103, 90.4125" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </Head>
  )
}
