'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

  const navLinkClass = "relative text-slate-700 hover:text-cyan-600 font-medium transition-all duration-300 py-2 group"
  const dropdownItemClass = "flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 hover:text-cyan-600 transition-all duration-200 group/item"

  return (
    <section 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg shadow-slate-200/50' 
          : 'bg-white shadow-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link href="/" className="block">
              <Image
                src="/images/logo/logo.png"
                alt="Mihisoft Logo"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-1">
            <a href="#top" className={navLinkClass} onClick={() => scrollToSection('top')}>
              <span className="px-4">Home</span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-3/4 transition-all duration-300" />
            </a>

            {/* About Us Dropdown */}
            <div className="relative group">
              <button
                type="button"
                className={`${navLinkClass} flex items-center px-4`}
                onClick={() => handleDropdownToggle('about')}
              >
                About us
                <ChevronDown className="ml-1.5 w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-3/4 transition-all duration-300" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-xl shadow-slate-200/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100 border border-slate-100 overflow-hidden">
                <div className="py-2">
                  <a href="#about_us" className={dropdownItemClass} onClick={() => scrollToSection('about_us')}>
                    <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover/item:scale-125 transition-transform" />
                    <span>About us</span>
                    <ArrowRight className="w-4 h-4 ml-auto opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                  </a>
                  <a href="#our_projects" className={dropdownItemClass} onClick={() => scrollToSection('our_projects')}>
                    <span className="w-2 h-2 rounded-full bg-blue-400 group-hover/item:scale-125 transition-transform" />
                    <span>Running projects</span>
                    <ArrowRight className="w-4 h-4 ml-auto opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                  </a>
                  <a href="#our_clients" className={dropdownItemClass} onClick={() => scrollToSection('our_clients')}>
                    <span className="w-2 h-2 rounded-full bg-indigo-400 group-hover/item:scale-125 transition-transform" />
                    <span>Our Clients</span>
                    <ArrowRight className="w-4 h-4 ml-auto opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                  </a>
                  <a href="#our_team" className={dropdownItemClass} onClick={() => scrollToSection('our_team')}>
                    <span className="w-2 h-2 rounded-full bg-purple-400 group-hover/item:scale-125 transition-transform" />
                    <span>Leadership Body</span>
                    <ArrowRight className="w-4 h-4 ml-auto opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                  </a>
                  <a href="#contact_us" className={dropdownItemClass} onClick={() => scrollToSection('contact_us')}>
                    <span className="w-2 h-2 rounded-full bg-teal-400 group-hover/item:scale-125 transition-transform" />
                    <span>Contact Us</span>
                    <ArrowRight className="w-4 h-4 ml-auto opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                  </a>
                </div>
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                type="button"
                className={`${navLinkClass} flex items-center px-4`}
                onClick={() => handleDropdownToggle('services')}
              >
                Services
                <ChevronDown className="ml-1.5 w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-3/4 transition-all duration-300" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-xl shadow-slate-200/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100 border border-slate-100 overflow-hidden">
                <div className="py-2">
                  <a href="#services" className={dropdownItemClass}>
                    <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover/item:scale-125 transition-transform" />
                    <span>Software Development</span>
                    <ArrowRight className="w-4 h-4 ml-auto opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                  </a>
                  <a href="#services" className={dropdownItemClass}>
                    <span className="w-2 h-2 rounded-full bg-blue-400 group-hover/item:scale-125 transition-transform" />
                    <span>RFID Based Automation</span>
                    <ArrowRight className="w-4 h-4 ml-auto opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                  </a>
                  <a href="#services" className={dropdownItemClass}>
                    <span className="w-2 h-2 rounded-full bg-indigo-400 group-hover/item:scale-125 transition-transform" />
                    <span>E-Commerce Services</span>
                    <ArrowRight className="w-4 h-4 ml-auto opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                  </a>
                  <a href="#services" className={dropdownItemClass}>
                    <span className="w-2 h-2 rounded-full bg-purple-400 group-hover/item:scale-125 transition-transform" />
                    <span>Access Control Management</span>
                    <ArrowRight className="w-4 h-4 ml-auto opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                  </a>
                  <a href="#services" className={dropdownItemClass}>
                    <span className="w-2 h-2 rounded-full bg-teal-400 group-hover/item:scale-125 transition-transform" />
                    <span>SEO Development</span>
                    <ArrowRight className="w-4 h-4 ml-auto opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                  </a>
                  <a href="#services" className={dropdownItemClass}>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 group-hover/item:scale-125 transition-transform" />
                    <span>Recruitment Management</span>
                    <ArrowRight className="w-4 h-4 ml-auto opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                  </a>
                </div>
              </div>
            </div>

            {/* Software Dropdown */}
            <div className="relative group">
              <button
                type="button"
                className={`${navLinkClass} flex items-center px-4`}
                onClick={() => handleDropdownToggle('software')}
              >
                Software
                <ChevronDown className="ml-1.5 w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-3/4 transition-all duration-300" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-xl shadow-slate-200/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100 border border-slate-100 overflow-hidden max-h-80 overflow-y-auto">
                <div className="py-2">
                  <a href="#services" className={dropdownItemClass}>
                    <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover/item:scale-125 transition-transform" />
                    <span>E-Commerce</span>
                    <ArrowRight className="w-4 h-4 ml-auto opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                  </a>
                  <a href="#services" className={dropdownItemClass}>
                    <span className="w-2 h-2 rounded-full bg-blue-400 group-hover/item:scale-125 transition-transform" />
                    <span>Online Newspaper</span>
                    <ArrowRight className="w-4 h-4 ml-auto opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                  </a>
                  <a href="#services" className={dropdownItemClass}>
                    <span className="w-2 h-2 rounded-full bg-indigo-400 group-hover/item:scale-125 transition-transform" />
                    <span>Office Management</span>
                    <ArrowRight className="w-4 h-4 ml-auto opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                  </a>
                  <a href="#services" className={dropdownItemClass}>
                    <span className="w-2 h-2 rounded-full bg-purple-400 group-hover/item:scale-125 transition-transform" />
                    <span>Warehouse Management</span>
                    <ArrowRight className="w-4 h-4 ml-auto opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                  </a>
                  <a href="#services" className={dropdownItemClass}>
                    <span className="w-2 h-2 rounded-full bg-teal-400 group-hover/item:scale-125 transition-transform" />
                    <span>Logistic Management</span>
                    <ArrowRight className="w-4 h-4 ml-auto opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                  </a>
                  <a href="#services" className={dropdownItemClass}>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 group-hover/item:scale-125 transition-transform" />
                    <span>Library Management</span>
                    <ArrowRight className="w-4 h-4 ml-auto opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                  </a>
                  <a href="#services" className={dropdownItemClass}>
                    <span className="w-2 h-2 rounded-full bg-rose-400 group-hover/item:scale-125 transition-transform" />
                    <span>Hospital Management</span>
                    <ArrowRight className="w-4 h-4 ml-auto opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                  </a>
                  <a href="#services" className={dropdownItemClass}>
                    <span className="w-2 h-2 rounded-full bg-amber-400 group-hover/item:scale-125 transition-transform" />
                    <span>School Management</span>
                    <ArrowRight className="w-4 h-4 ml-auto opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                  </a>
                </div>
              </div>
            </div>

            <a href="#our_projects" className={navLinkClass} onClick={() => scrollToSection('our_projects')}>
              <span className="px-4">Portfolios</span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-3/4 transition-all duration-300" />
            </a>
            <a href="#career" className={navLinkClass} onClick={() => scrollToSection('career')}>
              <span className="px-4">Career</span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-3/4 transition-all duration-300" />
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <motion.button
              onClick={() => scrollToSection('contact_us')}
              className="relative group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-7 py-2.5 rounded-full font-semibold overflow-hidden shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Get a Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100 text-slate-700 hover:bg-cyan-50 hover:text-cyan-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-1 border-t border-slate-100">
                {[
                  { label: 'Home', href: '#' },
                  { label: 'About us', href: '#about_us', section: 'about_us' },
                  { label: 'Services', href: '#services', section: 'services' },
                  { label: 'Portfolios', href: '#our_projects', section: 'our_projects' },
                  { label: 'Career', href: '#career', section: 'career' },
                  { label: 'Contact Us', href: '#contact_us', section: 'contact_us' },
                ].map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 hover:text-cyan-600 rounded-lg transition-all font-medium"
                    onClick={() => item.section && scrollToSection(item.section)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    {item.label}
                  </motion.a>
                ))}
                <motion.button
                  onClick={() => scrollToSection('contact_us')}
                  className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get a Quote
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
