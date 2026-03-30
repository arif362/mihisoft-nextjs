'use client'

import { motion } from 'framer-motion'
import { FaFacebook, FaLinkedin, FaSkype } from 'react-icons/fa'
import { Quote } from 'lucide-react'
import Image from 'next/image'

export default function ChairmanMessageSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden" id="chairman_message">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, white 1px, transparent 1px),
                           linear-gradient(white 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Accent Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-cyan-500/10 text-cyan-400 text-sm font-medium rounded-full mb-4">
            Leadership
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Chairman&apos;s Message
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 md:p-12 lg:p-16"
          >
            <div className="grid lg:grid-cols-3 gap-10 lg:gap-16 items-start">
              {/* Chairman Profile */}
              <motion.div 
                className="lg:col-span-1 text-center lg:text-left"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl rotate-6 opacity-20"></div>
                  <Image
                    src="/images/team/ashraf.jpeg"
                    alt="Engr. Md. Asraful Islam"
                    width={200}
                    height={200}
                    className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-2xl object-cover shadow-2xl"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-1">
                  Engr. Md. Asraful Islam
                </h3>
                <p className="text-cyan-400 font-semibold mb-1">Chairman & Founder</p>
                <p className="text-gray-400 text-sm mb-6">Mihisoft Technologies Ltd.</p>
                
                {/* Social Links */}
                <div className="flex justify-center lg:justify-start gap-3">
                  <a 
                    href="https://www.facebook.com/profile.php?id=100009816738088" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <FaFacebook className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/md-asraful-islam-950b5882/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-gray-400 hover:bg-blue-700 hover:text-white transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://join.skype.com/invite/v35HUFD73R9f"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-gray-400 hover:bg-sky-500 hover:text-white transition-all duration-300"
                    aria-label="Skype"
                  >
                    <FaSkype className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>

              {/* Message Content */}
              <motion.div 
                className="lg:col-span-2"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Quote className="w-12 h-12 text-cyan-500/30 mb-6" />
                
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p className="text-lg lg:text-xl">
                    Welcome to Mihisoft Technologies. Since our inception, we have been driven by a singular vision: to empower businesses through innovative technology solutions that create measurable impact.
                  </p>
                  
                  <p>
                    In today&apos;s rapidly evolving digital landscape, organizations need more than just software—they need strategic partners who understand their unique challenges. At Mihisoft, we combine deep technical expertise with business acumen to deliver solutions that drive efficiency, enhance productivity, and accelerate growth.
                  </p>
                  
                  <p>
                    Our commitment to excellence is reflected in every project we undertake. From custom software development to RFID automation and e-commerce solutions, we approach each engagement with the same dedication to quality and client success.
                  </p>
                  
                  <p className="text-white font-medium">
                    I invite you to explore how Mihisoft can help transform your business objectives into reality. Together, we can build solutions that not only meet today&apos;s demands but also prepare you for tomorrow&apos;s opportunities.
                  </p>
                </div>

                {/* Signature */}
                <div className="mt-10 pt-8 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-500 to-transparent"></div>
                    <div>
                      <p className="text-white font-semibold">Engr. Md. Asraful Islam</p>
                      <p className="text-gray-500 text-sm">Chairman & Founder</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
