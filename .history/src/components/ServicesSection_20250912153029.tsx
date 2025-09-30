'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Code, Smartphone, Globe, Palette, Settings, Shield, Monitor, Tablet } from 'lucide-react'

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'The process of improving some measure of an enterprise\'s success. Business growth can be achieved either by boosting of the top line or revenue of the business.',
      image: '/images/service/web_dev.png'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Sustainability is a priority interest for many of organizations, when it comes to sustainability and corporate responsibility, we believe the normal rules of business apply.',
      image: '/images/service/mobile_dev.png'
    },
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'In a contract, performance is deemed to be the fulfillment of an obligation, in a manner that releases the performer from all liabilities under the contract of both you and us.',
      image: '/images/service/custom_soft.png'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Business analytics is the practice of iterative, methodical exploration of organization\'s data with emphasis statistical analysis. Typically beyond those traditional business.',
      image: '/images/service/ui_ux.png'
    },
    {
      icon: Settings,
      title: 'Maintenance',
      description: 'Is an interpretation of trends in human behaviors which aims to increase effectiveness of a product or service for the consumer, as well as increase sales mutual benefit.',
      image: '/images/service/maintenance.png'
    },
    {
      icon: Shield,
      title: 'Quality Assurance (QA)',
      description: 'We help business improve financial performance by ensuring the entire organization system is aligned and set up to deliver on the company\'s objectives of all the time.',
      image: '/images/service/qa.png'
    },
    {
      icon: Monitor,
      title: 'Android App Development',
      description: 'Explore our App Creation service, where we turn your innovative ideas into user-friendly mobile applications for iOS and Android platforms.',
      image: '/images/service/android_app_development.png'
    },
    {
      icon: Tablet,
      title: 'iOS App Development',
      description: 'Explore our App Creation service, where we turn your innovative ideas into user-friendly mobile applications for iOS and Android platforms.',
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#48C7EC]">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are experts in this industry with more than 5 years experience. What that means is you are going to get right solution. Please find our services.
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
          <h3 className="text-3xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-xl mb-6">
            We specialize in creating tailored solutions for unique business challenges
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
            Get Custom Quote
          </button>
        </motion.div>
      </div>
    </section>
  )
}
