'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { HiSparkles } from 'react-icons/hi'

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
    { name: 'Goal Mania', logo: '/images/clients/goal-mania.svg' },
    { name: 'Huggies', logo: '/images/clients/huggies.jpeg' },
    { name: 'Kaler Kolom', logo: '/images/clients/kalerkolom.png' },
    { name: 'Kylie Simpson', logo: '/images/clients/kyliesimpson.webp' },
    { name: 'Orgaxen', logo: '/images/clients/orgaxen.png' },
    { name: 'Tenax', logo: '/images/clients/Tenax.png' }
  ]

  // Duplicate clients for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients]

  return (
    <section id="our_clients" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#48C7EC]/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#48C7EC]/10 text-[#48C7EC] px-4 py-2 rounded-full text-sm font-medium mb-4">
            <HiSparkles className="w-4 h-4" />
            Trusted Partners
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#48C7EC] to-cyan-400">Clients</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by leading organizations across various industries worldwide
          </p>
          <div className="mt-6">
            <div className="w-24 h-1 bg-gradient-to-r from-[#48C7EC] to-cyan-400 mx-auto rounded-full"></div>
          </div>
        </motion.div>

        {/* Infinite Scroll Carousel */}
        <div className="relative mb-20">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling Container */}
          <div className="overflow-hidden py-8">
            <motion.div
              className="flex gap-8"
              animate={{
                x: [0, -(208 + 32) * clients.length],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 60,
                  ease: "linear",
                },
              }}
            >
              {duplicatedClients.map((client, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-[#48C7EC]/30 w-48 h-32 flex items-center justify-center relative overflow-hidden">
                    {/* Hover Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#48C7EC]/5 to-cyan-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative w-full h-16">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        fill
                        className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    
                    {/* Client Name Tooltip */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                      {client.name}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats Section with Cards */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { value: '12+', label: 'Happy Clients', color: 'from-[#48C7EC] to-cyan-400' },
            { value: '15+', label: 'Projects Delivered', color: 'from-purple-500 to-pink-500' },
            { value: '2+', label: 'Years Growing', color: 'from-green-500 to-emerald-400' },
            { value: '100%', label: 'Client Satisfaction', color: 'from-orange-500 to-yellow-400' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="group"
            >
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 hover:border-[#48C7EC]/30 relative overflow-hidden">
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <h3 className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
