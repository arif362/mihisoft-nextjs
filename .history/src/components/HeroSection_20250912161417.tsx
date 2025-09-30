'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Pause, Play } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const slides = useMemo(() => [
    {
      image: '/images/slider/slider_tenax.png',
      title: 'Building Smart Bangladesh with Technology',
      subtitle: 'Leading software development company delivering innovative solutions that transform businesses and accelerate digital growth across Bangladesh and beyond.',
      primaryCTA: 'Our Services',
      secondaryCTA: 'Get Started'
    },
    {
      image: '/images/slider/m_4.png',
      title: 'Expert Custom Software Development',
      subtitle: 'From concept to deployment, we create cutting-edge mobile applications using the latest technologies that engage users and drive exceptional business results.',
      primaryCTA: 'View Portfolio',
      secondaryCTA: 'Start Project'
    },
    {
      image: '/images/slider/ai.webp',
      title: 'Complete Digital Transformation',
      subtitle: 'Empowering enterprises with comprehensive software solutions, cloud integration, and modern development practices for sustainable growth and competitive advantage.',
      primaryCTA: 'Learn More',
      secondaryCTA: 'Get Quote'
    }
  ], [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  // Preload images
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new window.Image()
      img.src = slide.image
    })
  }, [slides])

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 5000) // Change slide every 5 seconds
      return () => clearInterval(interval)
    }
  }, [isPlaying, slides.length])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ 
              opacity: index === currentSlide ? 1 : 0,
              scale: index === currentSlide ? 1 : 1.1
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ zIndex: index === currentSlide ? 1 : 0 }}
          >
            <Image
              src={slide.image}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              sizes="100vw"
              priority={index === 0}
              quality={90}
            />
          </motion.div>
        ))}
      </div>

      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4">
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white"
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                {slides[currentSlide].title.split(' ').map((word, index) => {
                  if (word === 'Technology' || word === 'Development' || word === 'Transformation' || word === 'Bangladesh') {
                    return <span key={index} className="bg-gradient-to-r from-[#48C7EC] to-cyan-400 bg-clip-text text-transparent">{word} </span>
                  }
                  return word + ' '
                })}
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl mb-8 leading-relaxed"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {slides[currentSlide].subtitle}
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-6"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <button
                  onClick={() => scrollToSection('about_us')}
                  className="bg-gradient-to-r from-[#48C7EC] to-[#3ab5db] hover:from-[#3ab5db] hover:to-[#2aa3c9] text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl"
                >
                  <span className="text-lg">{slides[currentSlide].primaryCTA}</span>
                  <ArrowRight className="w-6 h-6" />
                </button>
                
                <button
                  onClick={() => scrollToSection('contact_us')}
                  className="border-2 border-white/80 backdrop-blur-sm bg-white/10 text-white hover:bg-white hover:text-gray-900 px-10 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-lg"
                >
                  {slides[currentSlide].secondaryCTA}
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>


      {/* Enhanced Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-4 z-30">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? 'w-12 h-3 bg-white rounded-full'
                : 'w-3 h-3 bg-white/50 hover:bg-white/75 rounded-full'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* Enhanced Controls */}
      <div className="absolute bottom-8 right-8 flex items-center gap-4 z-30">
        <div className="bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
          {currentSlide + 1} / {slides.length}
        </div>
        <motion.button
          onClick={togglePlayPause}
          className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}
