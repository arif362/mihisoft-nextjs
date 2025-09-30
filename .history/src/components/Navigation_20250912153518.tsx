'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const handleDropdownToggle = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
    setOpenDropdown(null)
  }

  return (
    <section className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="block">
              <Image
                src="/images/logo/logo.png"
                alt="Mihisoft Logo"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-[#48C7EC] font-medium transition-colors">
              Home
            </a>

            {/* About Us Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-gray-700 hover:text-[#48C7EC] font-medium transition-colors"
                onClick={() => handleDropdownToggle('about')}
              >
                About us
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-2">
                  <a href="#about_us" className="block px-4 py-2 text-gray-700 hover:bg-[#48C7EC]/10 hover:text-[#48C7EC]" onClick={() => scrollToSection('about_us')}>About us</a>
                  <a href="#our_projects" className="block px-4 py-2 text-gray-700 hover:bg-[#48C7EC]/10 hover:text-[#48C7EC]" onClick={() => scrollToSection('our_projects')}>Running projects</a>
                  <a href="#our_clients" className="block px-4 py-2 text-gray-700 hover:bg-[#48C7EC]/10 hover:text-[#48C7EC]" onClick={() => scrollToSection('our_clients')}>Our Clients</a>
                  <a href="#our_team" className="block px-4 py-2 text-gray-700 hover:bg-[#48C7EC]/10 hover:text-[#48C7EC]" onClick={() => scrollToSection('our_team')}>Leadership Body</a>
                  <a href="#contact_us" className="block px-4 py-2 text-gray-700 hover:bg-[#48C7EC]/10 hover:text-[#48C7EC]" onClick={() => scrollToSection('contact_us')}>Contact Us</a>
                </div>
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-gray-700 hover:text-[#48C7EC] font-medium transition-colors"
                onClick={() => handleDropdownToggle('services')}
              >
                Services
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-2">
                  <a href="#services" className="block px-4 py-2 text-gray-700 hover:bg-[#48C7EC]/10 hover:text-[#48C7EC]">Software Development</a>
                  <a href="#services" className="block px-4 py-2 text-gray-700 hover:bg-[#48C7EC]/10 hover:text-[#48C7EC]">RFID Based Automation</a>
                  <a href="#services" className="block px-4 py-2 text-gray-700 hover:bg-[#48C7EC]/10 hover:text-[#48C7EC]">E-Commerce Services</a>
                  <a href="#services" className="block px-4 py-2 text-gray-700 hover:bg-[#48C7EC]/10 hover:text-[#48C7EC]">Access Control Management</a>
                  <a href="#services" className="block px-4 py-2 text-gray-700 hover:bg-[#48C7EC]/10 hover:text-[#48C7EC]">SEO Development</a>
                  <a href="#services" className="block px-4 py-2 text-gray-700 hover:bg-[#48C7EC]/10 hover:text-[#48C7EC]">Recruitment Management</a>
                </div>
              </div>
            </div>

            {/* Software Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-gray-700 hover:text-[#48C7EC] font-medium transition-colors"
                onClick={() => handleDropdownToggle('software')}
              >
                Software
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-2">
                  <a href="#services" className="block px-4 py-2 text-gray-700 hover:bg-[#48C7EC]/10 hover:text-[#48C7EC]">E-Commerce</a>
                  <a href="#services" className="block px-4 py-2 text-gray-700 hover:bg-[#48C7EC]/10 hover:text-[#48C7EC]">Online Newspaper</a>
                  <a href="#services" className="block px-4 py-2 text-gray-700 hover:bg-[#48C7EC]/10 hover:text-[#48C7EC]">Office Management</a>
                  <a href="#services" className="block px-4 py-2 text-gray-700 hover:bg-[#48C7EC]/10 hover:text-[#48C7EC]">Warehouse Management</a>
                  <a href="#services" className="block px-4 py-2 text-gray-700 hover:bg-[#48C7EC]/10 hover:text-[#48C7EC]">Logistic Management</a>
                  <a href="#services" className="block px-4 py-2 text-gray-700 hover:bg-[#48C7EC]/10 hover:text-[#48C7EC]">Library Management</a>
                  <a href="#services" className="block px-4 py-2 text-gray-700 hover:bg-[#48C7EC]/10 hover:text-[#48C7EC]">Hospital Management</a>
                  <a href="#services" className="block px-4 py-2 text-gray-700 hover:bg-[#48C7EC]/10 hover:text-[#48C7EC]">School Management</a>
                </div>
              </div>
            </div>

            <a href="#portfolios" className="text-gray-700 hover:text-[#48C7EC] font-medium transition-colors" onClick={() => scrollToSection('portfolios')}>
              Portfolios
            </a>
            <a href="#career" className="text-gray-700 hover:text-[#48C7EC] font-medium transition-colors" onClick={() => scrollToSection('career')}>
              Career
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection('contact_us')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              GET A Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-200"
            >
              <div className="py-4 space-y-4">
                <a href="#" className="block text-gray-700 hover:text-[#48C7EC] font-medium transition-colors">
                  Home
                </a>
                <a href="#about_us" className="block text-gray-700 hover:text-[#48C7EC] font-medium transition-colors" onClick={() => scrollToSection('about_us')}>
                  About us
                </a>
                <a href="#services" className="block text-gray-700 hover:text-[#48C7EC] font-medium transition-colors" onClick={() => scrollToSection('services')}>
                  Services
                </a>
                <a href="#portfolios" className="block text-gray-700 hover:text-[#48C7EC] font-medium transition-colors" onClick={() => scrollToSection('portfolios')}>
                  Portfolios
                </a>
                <a href="#career" className="block text-gray-700 hover:text-[#48C7EC] font-medium transition-colors" onClick={() => scrollToSection('career')}>
                  Career
                </a>
                <a href="#contact_us" className="block text-gray-700 hover:text-[#48C7EC] font-medium transition-colors" onClick={() => scrollToSection('contact_us')}>
                  Contact Us
                </a>
                <button
                  onClick={() => scrollToSection('contact_us')}
                  className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  GET A Quote
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
