'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Phone, Mail, MapPin, Send } from 'lucide-react'

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission (e.g., API call, email service)
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  return (
    <section id="contact_us" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#48C7EC]/10 text-[#48C7EC] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Phone className="w-4 h-4" />
            Enterprise Inquiries
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Start Your <span className="text-[#48C7EC]">Enterprise Project</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Schedule a consultation with our enterprise solutions team for government, fintech, healthcare, and large-scale projects
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Enterprise Contact</h3>
            
            <div className="flex items-start space-x-4">
              <div className="bg-[#48C7EC] p-3 rounded-lg">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">24/7 Enterprise Hotline</h4>
                <p className="text-gray-600">+880 1771109794</p>
                <p className="text-sm text-gray-500">Priority response for enterprise clients</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-[#48C7EC] p-3 rounded-lg">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Enterprise Sales</h4>
                <p className="text-gray-600">enterprise@mihisoft.com</p>
                <p className="text-sm text-gray-500">Response within 4 business hours</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-[#48C7EC] p-3 rounded-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Global Headquarters</h4>
                <p className="text-gray-600">6/7, Block B, Mirpur 12, Pallabi, Dhaka 1216</p>
                <p className="text-sm text-gray-500">Bangladesh | Serving 15+ countries</p>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <MapPin className="w-5 h-5 text-[#48C7EC] mr-2" />
                Find Us on Map
              </h4>
              <div className="h-80 rounded-xl overflow-hidden shadow-lg border border-gray-200 relative group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8897!2d90.36285731500285!3d23.8103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0c064949e61%3A0x1c72f2e7b8a2b0a9!2sMirpur%2012%2C%20Dhaka%201216%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1699200000000!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mihisoft Technologies Office Location"
                  className="w-full h-full transition-all duration-300 group-hover:scale-105"
                ></iframe>
                
                {/* Map Overlay with Address */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-[#48C7EC] rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Mihisoft Technologies Ltd.</p>
                      <p className="text-gray-600 text-xs">6/7, Block B, Mirpur 12, Pallabi</p>
                      <p className="text-gray-600 text-xs">Dhaka 1216, Bangladesh</p>
                    </div>
                  </div>
                </div>

                {/* Directions Button */}
                <div className="absolute bottom-4 right-4">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=6/7+Block+B,+Mirpur+12,+Pallabi,+Dhaka+1216,+Bangladesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#48C7EC] hover:bg-[#3ab5db] text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg transition-all duration-300 flex items-center space-x-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
              
              {/* Additional Map Info */}
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <div className="font-semibold text-gray-900">🚗 By Car</div>
                  <p className="text-gray-600 text-xs mt-1">15 min from Dhanmondi</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <div className="font-semibold text-gray-900">🚌 Public Transport</div>
                  <p className="text-gray-600 text-xs mt-1">Mirpur 12 Bus Stop nearby</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <div className="font-semibold text-gray-900">🏢 Landmarks</div>
                  <p className="text-gray-600 text-xs mt-1">Near Pallabi Police Station</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                    placeholder="+880 1XXXXXXXXX"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#48C7EC] hover:bg-[#3ab5db] text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
