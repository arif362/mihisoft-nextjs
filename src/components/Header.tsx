'use client'

import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { FaWhatsapp, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa'

export default function Header() {
  const socialLinks = [
    { href: "https://wa.me/+8801771109794", icon: FaWhatsapp, label: "WhatsApp", hoverColor: "hover:bg-green-500" },
    { href: "https://www.facebook.com/mihisoft", icon: FaFacebook, label: "Facebook", hoverColor: "hover:bg-blue-600" },
    { href: "https://www.linkedin.com/company/mihisoft", icon: FaLinkedin, label: "LinkedIn", hoverColor: "hover:bg-blue-700" },
    { href: "https://www.youtube.com/@mihisofttechnologies3793", icon: FaYoutube, label: "YouTube", hoverColor: "hover:bg-red-600" },
  ]

  return (
    <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 50%, #48C7EC 0%, transparent 50%), 
                           radial-gradient(circle at 75% 50%, #0ea5e9 0%, transparent 50%)`
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center py-2.5">
          {/* Contact Info */}
          <ul className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-1 text-sm">
            <li className="flex items-center gap-2 group hover:translate-x-0.5 transition-transform">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/10 group-hover:bg-cyan-500/20 transition-colors">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
              </span>
              <a href="tel:+8801771109794" className="text-gray-300 hover:text-white transition-colors">
                +880 1771109794
              </a>
            </li>
            
            <li className="flex items-center gap-2 group hover:translate-x-0.5 transition-transform">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/10 group-hover:bg-cyan-500/20 transition-colors">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
              </span>
              <a href="mailto:info@mihisoft.com" className="text-gray-300 hover:text-white transition-colors">
                info@mihisoft.com
              </a>
            </li>
            
            <li className="hidden md:flex items-center gap-2 group hover:translate-x-0.5 transition-transform">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/10 group-hover:bg-cyan-500/20 transition-colors">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              </span>
              <span className="text-gray-300">
                Mirpur 12, Pallabi, Dhaka
              </span>
            </li>

            <li className="hidden xl:flex items-center gap-2 group hover:translate-x-0.5 transition-transform">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/10 group-hover:bg-cyan-500/20 transition-colors">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
              </span>
              <span className="text-gray-300">
                Sat - Thu: 9:00 AM - 6:00 PM
              </span>
            </li>
          </ul>
          
          {/* Social Links */}
          <div className="flex items-center gap-2 mt-2 lg:mt-0">
            <span className="text-xs text-gray-400 mr-2 hidden sm:block">Follow Us:</span>
            <ul className="flex items-center gap-1.5">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-gray-300 hover:text-white ${social.hoverColor} transition-all duration-300 hover:scale-110`}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient border */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
    </header>
  )
}
