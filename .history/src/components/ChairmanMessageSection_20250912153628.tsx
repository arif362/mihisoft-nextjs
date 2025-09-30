'use client'

import { motion } from 'framer-motion'
import { FaFacebook, FaLinkedin, FaSkype, FaQuoteLeft } from 'react-icons/fa'

export default function ChairmanMessageSection() {
  return (
    <section className="testimonials-section sec-padd py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden" id="testimonials">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-title center text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Message From <span className="text-[#48C7EC]">Chairman</span>
          </h2>
          <div className="w-24 h-1 bg-[#48C7EC] mx-auto rounded-full"></div>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="slide-item max-w-5xl mx-auto"
        >
          {/* Enhanced Quote Icon */}
          <div className="quote text-center mb-12">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-20 h-20 bg-[#48C7EC] rounded-full shadow-lg"
            >
              <FaQuoteLeft className="text-3xl text-white" />
            </motion.div>
          </div>
          
          {/* Chairman Message Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 backdrop-blur-sm border border-white/20"
          >
            {/* Author Section */}
            <div className="author flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
              <motion.div 
                className="img-box relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  <img
                    src="/images/team/ashraf.jpeg"
                    alt="Engr. Md.Asraful Islam"
                    className="w-32 h-32 rounded-full object-cover border-4 border-[#48C7EC] shadow-lg"
                    style={{ height: '128px', width: '128px' }}
                  />
                  
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-full border-4 border-[#48C7EC] animate-pulse"></div>
                  
                  {/* Social Overlay */}
                  <div className="overlay absolute inset-0 bg-[#48C7EC] bg-opacity-95 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full flex items-center justify-center">
                    <div className="inner-box">
                      <ul className="social flex space-x-3">
                        <li>
                          <motion.a 
                            href="https://www.facebook.com/profile.php?id=100009816738088" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white hover:text-yellow-300 transition-colors"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FaFacebook className="w-6 h-6" />
                          </motion.a>
                        </li>
                        <li>
                          <motion.a 
                            href="https://www.linkedin.com/in/md-asraful-islam-950b5882/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white hover:text-yellow-300 transition-colors"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FaLinkedin className="w-6 h-6" />
                          </motion.a>
                        </li>
                        <li>
                          <motion.a 
                            href="https://join.skype.com/invite/v35HUFD73R9f"
                            className="text-white hover:text-yellow-300 transition-colors"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FaSkype className="w-6 h-6" />
                          </motion.a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <div className="text-center md:text-left flex-1" style={{ paddingLeft: '25px' }}>
                <motion.h4 
                  className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  Engr. Md.Asraful Islam
                </motion.h4>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <p className="text-blue-600 font-semibold text-lg mb-2">Chairman</p>
                  <p className="text-gray-600 font-medium">Dhaka, Bangladesh</p>
                </motion.div>
                
                {/* Achievement Highlights */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="mt-4 flex flex-wrap gap-2"
                >
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    Visionary Leader
                  </span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                    Tech Innovator
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    Business Strategist
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Message Text */}
            <motion.div
              className="slide-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <blockquote className="text-center">
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed italic font-medium mb-6 relative">
                  <span className="text-yellow-500 text-6xl absolute -top-4 -left-4 opacity-20">"</span>
                  Mihisoft has helped us to just have a better handle on everything in our business – to actually make decisions and move forward to grow.
                  <span className="text-yellow-500 text-6xl absolute -bottom-8 -right-4 opacity-20 rotate-180">"</span>
                </p>
                
                {/* Additional inspiring message */}
                <motion.p 
                  className="text-lg text-gray-600 font-normal mt-6 max-w-3xl mx-auto"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  viewport={{ once: true }}
                >
                  "Our commitment to excellence and innovation drives us to deliver exceptional solutions that transform businesses and create lasting value for our clients worldwide."
                </motion.p>
              </blockquote>
            </motion.div>

            {/* Signature */}
            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <div className="inline-block">
                <div className="w-32 h-0.5 bg-gray-300 mb-2"></div>
                <p className="text-gray-500 text-sm font-medium">Chairman</p>
                <p className="text-blue-600 text-sm font-semibold">Mihisoft Technologies Ltd.</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.article>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-10 animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-white rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute top-1/2 right-20 w-12 h-12 bg-blue-400 rounded-full opacity-10 animate-ping"></div>
      </div>
    </section>
  )
}
