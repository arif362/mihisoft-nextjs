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
      title: 'E-Library Management System',
      category: 'Web Application',
      image: '/images/project/e-library-landing.png',
      description: 'A comprehensive digital library management system with advanced search capabilities.'
    },
    {
      title: 'Business Growth Strategy Platform',
      category: 'Business Solution',
      image: '/images/project/business-growth-strategy.png',
      description: 'Strategic planning and analytics platform for business growth optimization.'
    },
    {
      title: 'HRM System',
      category: 'Enterprise Software',
      image: '/images/project/hrm.png',
      description: 'Complete human resource management system with payroll and attendance tracking.'
    },
    {
      title: 'Transport Management',
      category: 'Logistics Solution',
      image: '/images/project/transport.jpeg',
      description: 'End-to-end transportation and logistics management system.'
    },
    {
      title: 'MihiShop E-Commerce',
      category: 'E-Commerce Platform',
      image: '/images/project/mihishop.png',
      description: 'Full-featured e-commerce platform with advanced inventory management.'
    },
    {
      title: 'Mobile App Development',
      category: 'Mobile Application',
      image: '/images/project/ios.png',
      description: 'Cross-platform mobile applications for iOS and Android platforms.'
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful projects that have helped businesses transform digitally
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
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
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
                <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-2 transition-colors">
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
            Ready to Start Your Project?
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can bring your ideas to life
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  )
}
