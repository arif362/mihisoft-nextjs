'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Code, Smartphone, Globe, Palette, Settings, Shield, Monitor, Tablet, Building2, Landmark, HeartPulse, ShoppingCart } from 'lucide-react'

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const services = [
    {
      icon: Landmark,
      title: 'Government & Public Sector',
      description: 'Secure, scalable solutions for e-governance, citizen services, and public administration systems with full regulatory compliance and audit trails.',
      image: '/images/service/web_dev.png'
    },
    {
      icon: Building2,
      title: 'Fintech & Banking Solutions',
      description: 'Secure financial applications including payment gateways, digital banking, loan management, and real-time transaction processing systems with robust security measures.',
      image: '/images/service/mobile_dev.png'
    },
    {
      icon: HeartPulse,
      title: 'Healthcare & Life Sciences',
      description: 'Secure healthcare management systems, telemedicine platforms, EHR/EMR solutions, and medical device integrations following healthcare industry best practices.',
      image: '/images/service/custom_soft.png'
    },
    {
      icon: ShoppingCart,
      title: 'Enterprise E-Commerce',
      description: 'High-performance, multi-tenant e-commerce platforms handling millions of transactions with advanced inventory, analytics, and omnichannel capabilities.',
      image: '/images/service/ui_ux.png'
    },
    {
      icon: Code,
      title: 'Custom Enterprise Software',
      description: 'Bespoke enterprise applications with microservices architecture, API-first design, and seamless integration with existing enterprise systems and workflows.',
      image: '/images/service/maintenance.png'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Comprehensive security assessments, vulnerability testing, security consulting, and implementation of robust security frameworks for your applications.',
      image: '/images/service/qa.png'
    },
    {
      icon: Monitor,
      title: 'Cloud & DevOps',
      description: 'Enterprise cloud migration, Kubernetes orchestration, CI/CD pipelines, infrastructure automation, and 24/7 monitoring with 99.9% uptime SLA.',
      image: '/images/service/android_app_development.png'
    },
    {
      icon: Smartphone,
      title: 'Enterprise Mobile Apps',
      description: 'Secure enterprise mobility solutions with MDM integration, biometric authentication, offline capabilities, and cross-platform deployment.',
      image: '/images/service/ios_app_development.png'
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#48C7EC]/10 text-[#48C7EC] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Shield className="w-4 h-4" />
            Enterprise Solutions
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Enterprise <span className="text-[#48C7EC]">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mission-critical solutions for Government, Fintech, Healthcare, and E-commerce sectors with industry-leading security, compliance, and scalability.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#48C7EC] bg-opacity-80 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <service.icon className="w-16 h-16 text-white" />
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <button className="text-[#48C7EC] hover:text-[#3ab5db] font-semibold flex items-center space-x-2 transition-colors">
                  <span>Learn More</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-[#48C7EC] to-[#3ab5db] rounded-lg p-8 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Enterprise Partnership Inquiry</h3>
          <p className="text-xl mb-6">
            Looking for a trusted technology partner for your large-scale enterprise project? Schedule a consultation with our enterprise solutions team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#48C7EC] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Request Enterprise Quote
            </button>
            <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors">
              Download Capabilities Deck
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
