'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, MapPin, Clock, Users } from 'lucide-react'

export default function CareerSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const jobOpenings = [
    {
      title: 'Senior Enterprise Architect',
      department: 'Architecture',
      location: 'Dhaka, Bangladesh',
      type: 'Full Time',
      experience: '8+ years',
      description: 'Design and lead enterprise-scale microservices architectures for government and fintech clients with high availability requirements.'
    },
    {
      title: 'Security & Compliance Engineer',
      department: 'Security',
      location: 'Dhaka, Bangladesh',
      type: 'Full Time',
      experience: '5-8 years',
      description: 'Implement security frameworks, conduct security assessments, and ensure application security best practices for enterprise applications.'
    },
    {
      title: 'Full Stack Developer (Enterprise)',
      department: 'Engineering',
      location: 'Dhaka, Bangladesh',
      type: 'Full Time',
      experience: '4-7 years',
      description: 'Build mission-critical applications for government and healthcare sectors using modern frameworks and cloud-native technologies.'
    },
    {
      title: 'DevOps & SRE Engineer',
      department: 'Infrastructure',
      location: 'Dhaka, Bangladesh',
      type: 'Full Time',
      experience: '5-8 years',
      description: 'Maintain 99.9% uptime SLA, implement CI/CD pipelines, and manage Kubernetes clusters for enterprise clients.'
    }
  ]

  const benefits = [
    'Competitive enterprise-level salary',
    'Work on government & fintech projects',
    'International client exposure',
    'Industry certifications sponsorship',
    'Comprehensive health coverage',
    'Performance-based bonuses',
    'Remote work flexibility',
    'Clear leadership pathway'
  ]

  return (
    <section id="career" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#48C7EC]/10 text-[#48C7EC] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Users className="w-4 h-4" />
            Build Enterprise Solutions
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Join Our <span className="text-[#48C7EC]">Enterprise Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Work on mission-critical projects for government agencies, financial institutions, and global enterprises
          </p>
        </motion.div>

        {/* Why Join Us */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Why Work With Us?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <p className="text-gray-700">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Job Openings */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Current Openings</h3>
          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ x: -50, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h4>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{job.experience}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <button className="bg-[#48C7EC] hover:bg-[#3ab5db] text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Don&apos;t See Your Role?</h3>
          <p className="text-xl mb-6">
            Send us your resume and let us know how you can contribute to our team
          </p>
          <button className="bg-white text-[#48C7EC] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
            Send Resume
          </button>
        </motion.div>
      </div>
    </section>
  )
}
