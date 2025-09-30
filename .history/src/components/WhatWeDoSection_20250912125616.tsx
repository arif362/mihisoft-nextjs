'use client'

import { motion } from 'framer-motion'
import { Users, ArrowRight, Repeat, Trophy } from 'lucide-react'

export default function WhatWeDoSection() {
  const services = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Brainstorming",
      description: "After our clients give us the first brief of the requirements, we do brainstorm sessions and come up with possible solutions."
    },
    {
      icon: <ArrowRight className="w-8 h-8" />,
      title: "Enhancements", 
      description: "We provide updates, upgrades, new features follow after successful brainstorming."
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Support",
      description: "We're happy to provide support to your sales team, engineering team or anyone within your organization."
    }
  ]

  return (
    <section className="service py-20">
      <div className="container mx-auto px-4">
        <div className="row grid md:grid-cols-4 gap-8">
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="about-info sec-padd">
              <div className="section-title mb-6">
                <h2 className="text-3xl font-bold text-gray-900">What We Do</h2>
              </div>
              <div className="text mb-6">
                <p className="text-gray-600 leading-relaxed">
                  We are experts in this industry with more than 10 years experience. What that means is you are going to get right solution. please find our services.
                </p>
              </div>
              <div className="link">
                <a href="#services" className="default_link text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                  More service <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="no-padd item col-md-3 col-sm-6 col-xs-12"
            >
              <div className="center relative group bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="icon_box text-center">
                  <span className="text-blue-600 mb-4 inline-block">{service.icon}</span>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h4>
                </div>
                
                <div className="overlay-box absolute inset-0 bg-blue-600 bg-opacity-95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center p-8">
                  <div className="center text-center text-white">
                    <div className="icon_box mb-4">
                      <span className="text-white text-2xl inline-block">{service.icon}</span>
                      <h4 className="text-xl font-semibold mb-4">{service.title}</h4>
                    </div>
                    <div className="text text-sm leading-relaxed">
                      <p>{service.description}</p>
                    </div>
                    <div className="link mt-4">
                      <a href="#" className="default_link text-white hover:text-yellow-300 inline-flex items-center">
                        read more <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
