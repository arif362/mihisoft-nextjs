'use client'

import { Phone, Mail, MapPin } from 'lucide-react'
import { FaWhatsapp, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa'

export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-6 text-sm">
            <li className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>Phone +880 1771109794</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@mihisoft.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>6/7, Block B, Mirpur 12, Pallabi, Dhaka 1216</span>
            </li>
          </ul>
          <ul className="flex space-x-4 mt-2 lg:mt-0">
            <li>
              <a 
                href="https://wa.me/+8801771109794" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-green-400 transition-colors"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </li>
            <li>
              <a 
                href="https://www.facebook.com/mihisoft" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
            </li>
            <li>
              <a 
                href="https://www.linkedin.com/company/mihisoft" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
            </li>
            <li>
              <a 
                href="https://www.youtube.com/@mihisofttechnologies3793" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-red-500 transition-colors"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
