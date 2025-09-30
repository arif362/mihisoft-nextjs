'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function ClientsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const clients = [
    { name: 'Amanat', logo: '/images/clients/amanat.png' },
    { name: 'BD Soil', logo: '/images/clients/bd_soil.png' },
    { name: 'Bissobazar', logo: '/images/clients/bissobazar.png' },
    { name: 'Dimeru', logo: '/images/clients/dimeru.png' },
    { name: 'ERI', logo: '/images/clients/eri.png' },
    { name: 'FSA', logo: '/images/clients/fsa.png' },
    { name: 'Huggies', logo: '/images/clients/huggies.jpeg' },
    { name: 'Kaler Kolom', logo: '/images/clients/kalerkolom.png' },
    { name: 'Orgaxen', logo: '/images/clients/orgaxen.png' },
    { name: 'Tenax', logo: '/images/clients/Tenax.png' }
  ]

  return (
    <section id="our_clients" className="py-20 bg-gray-50">
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
            Our <span className="text-blue-600">Clients</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by leading organizations across various industries
          </p>
        </motion.div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
            >
              <div className="relative w-full h-16">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
        >
          <div>
            <h3 className="text-4xl font-bold text-blue-600 mb-2">10+</h3>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-600 mb-2">15+</h3>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-600 mb-2">10+</h3>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-600 mb-2">98%</h3>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
