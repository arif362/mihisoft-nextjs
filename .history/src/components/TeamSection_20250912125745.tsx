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
      name: 'Engr. Md.Asraful Islam',
      position: 'Chairman',
      image: '/images/team/ashraf.jpeg',
      bio: 'Mihisoft has helped us to just have a better handle on everything in our business – to actually make decisions and move forward to grow.',
      social: {
        linkedin: 'https://www.linkedin.com/in/md-asraful-islam-950b5882/',
        twitter: 'https://join.skype.com/invite/v35HUFD73R9f',
        email: 'asraful.mihisoft@gmail.com'
      }
    },
    {
      name: 'Engr. A.T.M Shakhwat Hussain',
      position: 'Chief Operating Officer',
      image: '/images/team/coo_sakhwat.jpeg',
      bio: 'Technical leadership and operational excellence driving the company towards sustainable growth and innovation.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'info@mihisoft.com'
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
