'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaFacebook, FaLinkedin, FaSkype } from 'react-icons/fa'

export default function TeamSection() {
  return (
    <section className="testimonials-section sec-padd py-20" id="our_team">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title center text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Message From Chairman
          </h2>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="slide-item max-w-4xl mx-auto"
        >
          {/* Quote Icon */}
          <div className="quote text-center mb-8">
            <span className="icon-left text-6xl text-blue-600 opacity-20">"</span>
          </div>
          
          {/* Author Section */}
          <div className="author flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
            <div className="img-box relative group">
              <a href="#" className="block">
                <Image
                  src="/images/team/ashraf.jpeg"
                  alt="Engr. Md.Asraful Islam"
                  width={100}
                  height={100}
                  className="rounded-full object-cover"
                  style={{ height: '100px', width: '100px' }}
                />
              </a>
              
              {/* Social Overlay */}
              <div className="overlay absolute inset-0 bg-blue-600 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full flex items-center justify-center">
                <div className="inner-box">
                  <ul className="social flex space-x-2">
                    <li>
                      <a 
                        href="https://www.facebook.com/profile.php?id=100009816738088" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-yellow-300 transition-colors"
                      >
                        <FaFacebook className="w-5 h-5" />
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.linkedin.com/in/md-asraful-islam-950b5882/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-yellow-300 transition-colors"
                      >
                        <FaLinkedin className="w-5 h-5" />
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://join.skype.com/invite/v35HUFD73R9f"
                        className="text-white hover:text-yellow-300 transition-colors"
                      >
                        <FaSkype className="w-5 h-5" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="text-center md:text-left" style={{ paddingLeft: '25px' }}>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Engr. Md.Asraful Islam
              </h4>
              <a href="#" className="block">
                <p className="text-gray-600 mb-2">Dhaka, Bangladesh</p>
              </a>
            </div>
          </div>

          {/* Message Text */}
          <div className="slide-text text-center">
            <p className="text-lg text-gray-700 leading-relaxed italic">
              "Mihisoft has helped us to just have a better handle on everything in our business – to actually make decisions and move forward to grow."
            </p>
          </div>
        </motion.article>
      </div>
    </section>
  )
}
