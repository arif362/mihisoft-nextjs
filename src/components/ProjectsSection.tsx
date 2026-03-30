'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const projects = [
    {
      title: 'Government E-Governance Portal',
      category: 'Government & Public Sector',
      image: '/images/project/e-library-landing.png',
      description: 'Secure citizen services portal serving 2M+ users with multi-language support, SSO integration, and full audit compliance.'
    },
    {
      title: 'Fintech Payment Gateway',
      category: 'Financial Services',
      image: '/images/project/business-growth-strategy.png',
      description: 'Secure payment processing platform with robust transaction handling, fraud detection, and seamless integration capabilities.'
    },
    {
      title: 'HRMS Platform',
      category: 'Business Software',
      image: '/images/project/hrm.png',
      description: 'Comprehensive HR management system for 10,000+ employees with payroll, attendance, and compliance modules.'
    },
    {
      title: 'Supply Chain Management',
      category: 'Logistics & Operations',
      image: '/images/project/transport.jpeg',
      description: 'End-to-end supply chain solution with real-time tracking, inventory optimization, and predictive analytics.'
    },
    {
      title: 'E-Commerce Platform',
      category: 'Retail & E-Commerce',
      image: '/images/project/mihishop.png',
      description: 'Multi-tenant e-commerce platform processing 1M+ orders/month with AI-powered recommendations.'
    },
    {
      title: 'Healthcare Management System',
      category: 'Healthcare & Life Sciences',
      image: '/images/project/ios.png',
      description: 'Secure healthcare platform with EHR/EMR features, telemedicine capabilities, and medical record management.'
    }
  ]

  return (
    <section id="our_projects" className="py-20 bg-gray-50">
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
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Our Portfolio
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Proven <span className="text-[#48C7EC]">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore mission-critical solutions we&apos;ve delivered for government agencies, financial institutions, and organizations worldwide
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#48C7EC] text-white px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <button className="text-[#48C7EC] hover:text-[#3ab5db] font-semibold flex items-center space-x-2 transition-colors">
                  <span>View Details</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Build Your Solution?
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Let&apos;s discuss how we can deliver mission-critical solutions for your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#48C7EC] hover:bg-[#3ab5db] text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule a Demo
            </button>
            <button className="border-2 border-[#48C7EC] text-[#48C7EC] hover:bg-[#48C7EC] hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Download Case Studies PDF
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
