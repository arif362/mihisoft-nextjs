'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle, Users, Award, Clock } from 'lucide-react'

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const stats = [
    { icon: Users, number: '50+', label: 'Enterprise Clients' },
    { icon: Award, number: '99.9%', label: 'Uptime Guarantee' },
    { icon: CheckCircle, number: '100+', label: 'Projects Delivered' },
    { icon: Clock, number: '24/7', label: 'Enterprise Support' },
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
            <div className="inline-flex items-center gap-2 bg-[#48C7EC]/10 text-[#48C7EC] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Award className="w-4 h-4" />
              Enterprise-Grade Solutions
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About <span className="text-[#48C7EC]">Mihisoft</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Mihisoft Technologies is a trusted enterprise software development partner delivering 
              mission-critical solutions for Government, Fintech, Healthcare, and E-commerce sectors. 
              With secure development practices and a commitment to excellence, we help 
              organizations achieve digital transformation at scale.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our mission is to empower enterprises with secure, scalable, and innovative technology 
              solutions that drive operational efficiency, ensure regulatory compliance, and create 
              lasting competitive advantage in the global marketplace.
            </p>
            
            {/* Features */}
            <div className="space-y-4 mb-8">
              {[
                'Government & Public Sector Solutions',
                'Fintech & Banking Applications',
                'Healthcare Management Systems',
                'Enterprise E-Commerce Platforms',
                'Cloud-Native Architecture & DevOps'
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
              Schedule Enterprise Consultation
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
                <stat.icon className="w-12 h-12 text-[#48C7EC] mx-auto mb-4" />
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
            Why Enterprises Choose Us
          </h3>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "How do you ensure security and compliance for enterprise applications?",
                answer: "We follow industry-leading security practices including OWASP guidelines, implement end-to-end encryption, and conduct regular security audits. Our team is experienced in developing solutions that meet various industry security requirements."
              },
              {
                question: "Can you handle large-scale government and fintech projects?",
                answer: "Absolutely. We have extensive experience delivering mission-critical solutions for government agencies and financial institutions, with robust architecture designed for high availability, scalability, and stringent security requirements."
              },
              {
                question: "What is your approach to enterprise-level support and SLA?",
                answer: "We offer 24/7 dedicated support with guaranteed response times, 99.9% uptime SLA, dedicated account managers, and comprehensive documentation. Our enterprise clients receive priority support with direct access to senior engineers."
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
