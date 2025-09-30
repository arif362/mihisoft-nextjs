'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle, Users, Award, Clock } from 'lucide-react'

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const stats = [
    { icon: Users, number: '10+', label: 'Happy Clients' },
    { icon: Award, number: '5+', label: 'Years Growing' },
    { icon: CheckCircle, number: '15+', label: 'Projects Delivered' },
    { icon: Clock, number: '48hrs', label: 'Quick Turnaround' },
  ]

  return (
    <section id="about_us" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About <span className="text-[#48C7EC]">Mihisoft</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Mihisoft Technologies is an agile startup revolutionizing software development in Bangladesh. 
              Founded in 2020, we combine startup speed with enterprise-grade quality to deliver 
              innovative solutions that transform businesses rapidly.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our mission is to accelerate digital transformation for businesses of all sizes by providing 
              fast, reliable, and cutting-edge technology solutions with unmatched agility and quality.
            </p>
            
            {/* Features */}
            <div className="space-y-4 mb-8">
              {[
                'Rapid MVP Development (2-4 weeks)',
                'Agile Mobile App Solutions',
                'Modern Web Applications',
                'E-Commerce & SaaS Platforms',
                'Quick Deployment & DevOps'
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-[#48C7EC] hover:bg-[#3ab5db] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project Today
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our Startup?
          </h3>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "How fast can you deliver a working prototype?",
                answer: "We specialize in rapid MVP development and can deliver a functional prototype within 2-4 weeks, allowing you to test your ideas quickly and iterate based on feedback."
              },
              {
                question: "What makes your startup different from large agencies?",
                answer: "As a focused startup team, we offer personalized attention, faster decision-making, competitive pricing, and the agility to adapt quickly to your changing requirements without bureaucratic delays."
              },
              {
                question: "Can you handle enterprise-level quality with startup speed?",
                answer: "Absolutely! We combine startup agility with enterprise-grade development practices, modern DevOps, automated testing, and quality assurance to deliver robust solutions rapidly."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h4>
                <p className="text-gray-700">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
