'use client'

import Image from 'next/image'
import { Phone, Mail, MapPin, ArrowUp, Shield, Award, CheckCircle } from 'lucide-react'
import { FaWhatsapp, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Trust Indicators Bar */}
      <div className="bg-gray-800 py-4 border-b border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span>Secure Development</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-blue-400" />
              <span>100% Client Satisfaction</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-400" />
              <span>Quality Assured</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-purple-400" />
              <span>NDA Protected</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-cyan-400" />
              <span>On-Time Delivery</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src="/images/logo/logo.png"
                alt="Mihisoft Logo"
                width={150}
                height={50}
                className="h-12 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Mihisoft Technologies is a trusted software development partner delivering 
              mission-critical solutions for Government, Fintech, Healthcare, and E-commerce sectors 
              across Bangladesh and beyond with secure development practices.
            </p>
            <div className="flex flex-wrap gap-2 mb-6 text-sm">
              <span className="px-3 py-1 bg-gray-800 rounded-full text-gray-300">Government Solutions</span>
              <span className="px-3 py-1 bg-gray-800 rounded-full text-gray-300">Fintech</span>
              <span className="px-3 py-1 bg-gray-800 rounded-full text-gray-300">Healthcare</span>
              <span className="px-3 py-1 bg-gray-800 rounded-full text-gray-300">E-Commerce</span>
            </div>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/+8801771109794" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Chat with Mihisoft on WhatsApp"
                className="bg-gray-800 p-3 rounded-lg hover:bg-green-600 transition-colors"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/mihisoft" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Mihisoft on Facebook"
                className="bg-gray-800 p-3 rounded-lg hover:bg-[#48C7EC] transition-colors"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/mihisoft" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Mihisoft on LinkedIn"
                className="bg-gray-800 p-3 rounded-lg hover:bg-[#3ab5db] transition-colors"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.youtube.com/@mihisofttechnologies3793" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Mihisoft on YouTube"
                className="bg-gray-800 p-3 rounded-lg hover:bg-red-600 transition-colors"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Our Solutions</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Government & Public Sector
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Fintech & Banking
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Healthcare Solutions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  E-Commerce Platforms
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('our_projects')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact_us')}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Contact Support
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#48C7EC] mt-1" />
                <div>
                  <p className="text-gray-300">+880 1771109794</p>
                  <p className="text-xs text-gray-500">Available 24/7</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#48C7EC] mt-1" />
                <div>
                  <p className="text-gray-300">info@mihisoft.com</p>
                  <p className="text-xs text-gray-500">Quick Response</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#48C7EC] mt-1" />
                <div>
                  <p className="text-gray-300">6/7, Block B, Mirpur 12, Pallabi, Dhaka 1216</p>
                  <p className="text-xs text-gray-500">Bangladesh HQ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Mihisoft Technologies. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-[#48C7EC] hover:bg-[#3ab5db] text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  )
}
