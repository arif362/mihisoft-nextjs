'use client'

import { motion } from 'framer-motion'
import { FaFacebook, FaLinkedin, FaSkype, FaMapMarkerAlt, FaAward, FaUsers } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'Engr. Md.Asraful Islam',
      position: 'Chairman',
      image: '/images/team/ashraf.jpeg',
      description: 'Visionary leader driving strategic growth and innovation with extensive experience in technology leadership and business development.',
      experience: '15+ Years',
      achievements: ['Strategic Leader', 'Tech Innovator', 'Business Expert'],
      social: {
        facebook: 'https://www.facebook.com/profile.php?id=100009816738088',
        linkedin: 'https://www.linkedin.com/in/md-asraful-islam-950b5882/',
        skype: 'https://join.skype.com/invite/v35HUFD73R9f'
      }
    },
    {
      name: 'Engr. A.T.M Shakhwat Hussain',
      position: 'Chief Operating Officer',
      image: '/images/team/coo_sakhwat.jpeg',
      description: 'Operations excellence leader ensuring seamless project delivery and organizational efficiency across all departments and teams.',
      experience: '12+ Years',
      achievements: ['Operations Expert', 'Team Builder', 'Process Optimizer'],
      social: {
        facebook: 'https://www.facebook.com/profile.php?id=100007704107082&mibextid=ZbWKwL',
        linkedin: '#',
        skype: '#'
      }
    }
  ]

  return (
    <section 
      className="our-team py-24 relative overflow-hidden"
      id="our_team"
    >
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"></div>
      
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-[#48C7EC]/10 text-[#48C7EC] px-4 py-2 rounded-full text-sm font-medium mb-4">
            <HiSparkles className="w-4 h-4" />
            Meet Our Leaders
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Leadership <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#48C7EC] to-cyan-400">Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experienced leaders driving innovation and success with strategic vision and operational excellence
          </p>
          <div className="mt-8">
            <div className="w-24 h-1 bg-gradient-to-r from-[#48C7EC] to-cyan-400 mx-auto rounded-full"></div>
          </div>
        </motion.div>
        
        {/* Enhanced Team Cards */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 h-full flex flex-col">
                {/* Card Header with Image */}
                <div className="relative flex-shrink-0">
                  <div className="h-80 overflow-hidden relative">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Experience Badge */}
                    <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                      <div className="flex items-center gap-2">
                        <FaAward className="text-yellow-500 w-4 h-4" />
                        <span className="text-sm font-semibold text-gray-800">{member.experience}</span>
                      </div>
                    </div>

                    {/* Social Media Overlay */}
                    <div className="absolute inset-0 bg-blue-600/95 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-white text-lg font-medium mb-6">Connect with {member.name.split(' ')[0]}</p>
                        <ul className="flex justify-center space-x-6">
                          <li>
                            <motion.a 
                              href={member.social.facebook} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-all duration-300"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <FaFacebook className="w-5 h-5" />
                            </motion.a>
                          </li>
                          <li>
                            <motion.a 
                              href={member.social.linkedin} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-all duration-300"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <FaLinkedin className="w-5 h-5" />
                            </motion.a>
                          </li>
                          <li>
                            <motion.a 
                              href={member.social.skype}
                              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-all duration-300"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <FaSkype className="w-5 h-5" />
                            </motion.a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8 flex-grow flex flex-col">
                  {/* Name and Position */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#48C7EC] transition-colors duration-300 min-h-[2.5rem]">
                      {member.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-[#48C7EC] rounded-full"></div>
                      <p className="text-lg font-semibold text-[#48C7EC] min-h-[1.75rem]">
                        {member.position}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <FaMapMarkerAlt className="w-4 h-4" />
                      <span className="text-sm">Dhaka, Bangladesh</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6 flex-grow min-h-[4rem]">
                    {member.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <FaUsers className="text-[#48C7EC] w-4 h-4" />
                      <span className="text-sm font-semibold text-gray-700">Key Expertise</span>
                    </div>
                    <div className="flex flex-wrap gap-2 min-h-[2.5rem]">
                      {member.achievements.map((achievement, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-gradient-to-r from-[#48C7EC]/10 to-cyan-100 text-[#48C7EC] rounded-full text-sm font-medium border border-[#48C7EC]/30"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <motion.button
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl mt-auto"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Profile
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-xl max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">2020</div>
                <div className="text-gray-600">Founded Year</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
                <div className="text-gray-600">Growing Team</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}
