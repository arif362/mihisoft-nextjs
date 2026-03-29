'use client'

import { motion } from 'framer-motion'
import { FaFacebook, FaLinkedin, FaSkype, FaMapMarkerAlt, FaStar, FaUsers } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'
import Image from 'next/image'

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'Engr. Md.Asraful Islam',
      position: 'Chairman',
      image: '/images/team/ashraf.jpeg',
      description: 'Visionary leader driving strategic growth and innovation with extensive experience in technology leadership and business development.',
      specialty: 'Strategic Vision',
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
      specialty: 'Operations Excellence',
      achievements: ['Operations Expert', 'Team Builder', 'Process Optimizer'],
      social: {
        facebook: 'https://www.facebook.com/profile.php?id=100007704107082&mibextid=ZbWKwL',
        linkedin: '#',
        skype: '#'
      }
    },
    {
      name: 'Md. Nuruzzaman Nur (Nahid)',
      position: 'Director',
      image: '/images/team/nahid.png',
      description: 'Strategic director with strong expertise in business development and technology solutions, driving company growth and innovation.',
      specialty: 'Business Growth',
      achievements: ['Business Development', 'Strategic Planning', 'Tech Solutions'],
      social: {
        facebook: '#',
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
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#48C7EC]/30 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#48C7EC] h-full flex flex-col">
                {/* Card Header with Image */}
                <div className="relative flex-shrink-0">
                  <div className="h-72 overflow-hidden relative">
                    <Image 
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Specialty Badge */}
                    <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                      <div className="flex items-center gap-2">
                        <FaStar className="text-yellow-500 w-4 h-4" />
                        <span className="text-sm font-semibold text-gray-800">{member.specialty}</span>
                      </div>
                    </div>

                    {/* Social Media Overlay */}
                    <div className="absolute inset-0 bg-[#48C7EC]/95 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-white text-lg font-medium mb-6">Connect with {member.name.split(' ')[0]}</p>
                        <ul className="flex justify-center space-x-6">
                          <li>
                            <motion.a 
                              href={member.social.facebook} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#48C7EC] transition-all duration-300"
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
                              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#48C7EC] transition-all duration-300"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <FaLinkedin className="w-5 h-5" />
                            </motion.a>
                          </li>
                          <li>
                            <motion.a 
                              href={member.social.skype}
                              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#48C7EC] transition-all duration-300"
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
                    className="w-full bg-gradient-to-r from-[#48C7EC] to-[#3ab5db] text-white py-3 rounded-xl font-semibold hover:from-[#3ab5db] hover:to-[#2aa3c9] transition-all duration-300 shadow-lg hover:shadow-xl mt-auto"
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

        {/* Team Group Photo Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-20 max-w-6xl mx-auto px-4"
        >
          {/* Section Title */}
          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#48C7EC]/20 to-cyan-400/20 text-[#48C7EC] px-5 py-2.5 rounded-full text-sm font-semibold mb-4 border border-[#48C7EC]/30"
            >
              <FaUsers className="w-4 h-4" />
              The Dream Team
            </motion.div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Together We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#48C7EC] to-cyan-500">Innovate</span>
            </h3>
          </div>

          <div className="relative group cursor-pointer">
            {/* Animated Background Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#48C7EC] via-purple-500 to-cyan-400 rounded-3xl opacity-0 group-hover:opacity-70 blur-xl transition-all duration-700 animate-pulse"></div>
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 via-[#48C7EC] to-purple-500 rounded-3xl opacity-20 group-hover:opacity-40 blur-2xl transition-all duration-500"></div>
            
            {/* Corner Decorations */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-4 border-l-4 border-[#48C7EC] rounded-tl-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -top-3 -right-3 w-8 h-8 border-t-4 border-r-4 border-cyan-400 rounded-tr-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-4 border-l-4 border-cyan-400 rounded-bl-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-4 border-r-4 border-[#48C7EC] rounded-br-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Image Container */}
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border-2 border-white/50 group-hover:border-[#48C7EC]/50 transition-all duration-500">
              <div className="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] overflow-hidden">
                <Image
                  src="/images/team/team-group-photo.webp"
                  alt="Mihisoft Technologies Leadership Team"
                  fill
                  className="object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-105"
                  priority
                />
                
                {/* Multi-layer Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-70"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#48C7EC]/10 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Floating Badge */}
                <motion.div 
                  className="absolute top-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl px-5 py-3 shadow-xl border border-white/50"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#48C7EC] to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                      <HiSparkles className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Established</div>
                      <div className="text-lg font-bold text-gray-900">Since 2024</div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Caption Overlay with Glass Effect */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                  <motion.div 
                    className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-white/90 text-sm font-semibold uppercase tracking-widest">United in Vision</span>
                        </div>
                        <h3 className="text-2xl md:text-4xl font-bold text-white mb-3 leading-tight">
                          Driven by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#48C7EC] to-cyan-300">Excellence</span>
                        </h3>
                        <p className="text-white/70 text-sm md:text-base max-w-xl leading-relaxed">
                          Our leadership team brings decades of combined experience in technology, innovation, and strategic business growth.
                        </p>
                      </div>
                      <motion.button
                        className="flex-shrink-0 bg-gradient-to-r from-[#48C7EC] to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 group/btn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>Meet the Team</span>
                        <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

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
                <div className="text-3xl font-bold text-[#48C7EC] mb-2">2024</div>
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
