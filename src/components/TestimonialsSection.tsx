'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'
import Image from 'next/image'

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const testimonials = [
    {
      name: 'Ahmed Rahman',
      position: 'CEO, Tech Solutions Ltd',
      content: 'Mihisoft delivered an exceptional e-commerce platform that exceeded our expectations. Their team\'s expertise and dedication are remarkable.',
      rating: 5,
      image: '/images/team/1.jpg'
    },
    {
      name: 'Fatima Khan',
      position: 'Director, Digital Ventures',
      content: 'The mobile app developed by Mihisoft transformed our business operations. Highly professional team with excellent technical skills.',
      rating: 5,
      image: '/images/team/2.jpg'
    },
    {
      name: 'Mohammad Ali',
      position: 'Founder, StartupBD',
      content: 'Outstanding service and support from Mihisoft. They understood our requirements perfectly and delivered a robust solution.',
      rating: 5,
      image: '/images/team/3.jpg'
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            What Our <span className="text-yellow-300">Clients Say</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Don&apos;t just take our word for it - hear from our satisfied clients
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-blue-600 mb-4" />
              
              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-gray-700 mb-6 italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              
              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
