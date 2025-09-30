'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle, Users, Award, Clock } from 'lucide-react'

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const stats = [
    { icon: Users, number: '20+', label: 'Happy Clients' },
    { icon: Award, number: '5+', label: 'Years Growing' },
    { icon: CheckCircle, number: '25+', label: 'Projects Delivered' },
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
              About <span className="text-blue-600">Mihisoft</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Mihisoft Technologies is a leading software development company in Bangladesh, 
              dedicated to helping businesses transform digitally. With over 10 years of experience, 
              we have been at the forefront of technology innovation.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our mission is to build Smart Bangladesh by providing cutting-edge technology solutions 
              that empower businesses to achieve their goals efficiently and effectively.
            </p>
            
            {/* Features */}
            <div className="space-y-4 mb-8">
              {[
                'Custom Software Development',
                'Mobile App Development',
                'Web Development & Design',
                'E-Commerce Solutions',
                'Digital Marketing Services'
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
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Learn More About Us
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
            Frequently Asked Questions
          </h3>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "What services does Mihisoft provide?",
                answer: "We provide comprehensive software development services including web development, mobile app development, e-commerce solutions, and digital marketing services."
              },
              {
                question: "How long has Mihisoft been in business?",
                answer: "Mihisoft has been serving clients for over 10 years, delivering innovative technology solutions across various industries."
              },
              {
                question: "Do you provide ongoing support after project completion?",
                answer: "Yes, we provide 24/7 ongoing support and maintenance services to ensure your software continues to perform optimally."
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
