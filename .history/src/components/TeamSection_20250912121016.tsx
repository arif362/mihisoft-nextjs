'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Linkedin, Twitter, Mail } from 'lucide-react'

export default function TeamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const teamMembers = [
    {
      name: 'Md. Shahidul Islam',
      position: 'CEO & Founder',
      image: '/images/team/1.jpg',
      bio: 'Visionary leader with 15+ years of experience in software development and business strategy.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'shahidul@mihisoft.com'
      }
    },
    {
      name: 'Dr. Rashida Begum',
      position: 'CTO',
      image: '/images/team/2.jpg',
      bio: 'Technical expert specializing in AI, machine learning, and enterprise software architecture.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'rashida@mihisoft.com'
      }
    },
    {
      name: 'Md. Rafiqul Islam',
      position: 'Lead Developer',
      image: '/images/team/3.jpg',
      bio: 'Full-stack developer with expertise in modern web technologies and mobile app development.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'rafiq@mihisoft.com'
      }
    },
    {
      name: 'Fatima Rahman',
      position: 'UI/UX Designer',
      image: '/images/team/4.jpg',
      bio: 'Creative designer focused on user-centered design and creating exceptional digital experiences.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'fatima@mihisoft.com'
      }
    },
    {
      name: 'Md. Karim Ahmed',
      position: 'Project Manager',
      image: '/images/team/5.jpg',
      bio: 'Experienced project manager ensuring timely delivery and quality of all client projects.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'karim@mihisoft.com'
      }
    },
    {
      name: 'Nasreen Sultana',
      position: 'Business Analyst',
      image: '/images/team/6.jpg',
      bio: 'Strategic thinker specializing in business process analysis and digital transformation.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'nasreen@mihisoft.com'
      }
    }
  ]

  return (
    <section 
      id="our_team" 
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: 'url(/images/background/3.jpg)',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Meet Our <span className="text-blue-400">Team</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Our talented team of professionals dedicated to delivering exceptional results
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Member Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a href={member.social.linkedin} className="text-white hover:text-blue-200 transition-colors">
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a href={member.social.twitter} className="text-white hover:text-blue-200 transition-colors">
                      <Twitter className="w-6 h-6" />
                    </a>
                    <a href={`mailto:${member.social.email}`} className="text-white hover:text-blue-200 transition-colors">
                      <Mail className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
