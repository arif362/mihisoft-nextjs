'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronRight, ChevronDown } from 'lucide-react'

export default function AboutFaqSection() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(1) // Second item active by default

  const faqs = [
    {
      question: "What is the procedure to develop a software?",
      answer: "We follow agile methodologies for developing software."
    },
    {
      question: "Do you have team for providing my software solution?",
      answer: "We have a team of talented engineers and they are fully devoted to serving the customers in software developing problems. We are experts in Ruby on Rails, .Net, PHP, Java, Android."
    },
    {
      question: "What makes you special from others?",
      answer: "We have experience in a consulting development environment (or similar), and we are a self-starter who can work in a rapidly changing industry. We tolerate ambiguity and demonstrate problem-solving leadership with limited oversight."
    }
  ]

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  return (
    <section className="about-faq sec-padd py-20" id="about_us">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title center text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">About us & FAQ's</h2>
        </motion.div>
        
        <div className="row grid lg:grid-cols-2 gap-12">
          <div className="col-md-6 col-sm-12 col-xs-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="about-info"
            >
              <div className="text">
                <p className="text-gray-700 leading-relaxed text-justify">
                  Mihisoft founded just 2020, Our aim to provide professional skill to fresh graduates and make their career path easy to enter in the IT World as if they can be the resources for country, theirs family and IT world. Not only skill providing to freshers but also we provide Software Solutions Design and Development services to institutions, government agencies and corporations globally. We specialize in Web Applications, Database Development, Custom Multimedia and Electronic Publishing applications. Our teams of expert engineers, project managers and support staff have decades of experience to develop, deploy and service these applications for commercial clients in the United States, Canada Europe and Asia. The industry segments to which services are delivered include Education, Healthcare, International Institutions, Government, Life Sciences, Media, Manufacturing, Publication, Retail, Sports and Leisure. ASP, ERP, CRM, SCM, MIS, e-Commerce, e-Government Solutions for Intranet and Internet are developed for international clients.
                </p>
              </div>
            </motion.div>
          </div>
          
          <div className="col-md-6 col-sm-12 col-xs-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="accordion-box"
            >
              {faqs.map((faq, index) => (
                <div key={index} className="accordion animated out mb-4" data-delay="0" data-animation="fadeInUp">
                  <div 
                    className={`acc-btn cursor-pointer p-4 bg-white border border-gray-200 rounded-lg shadow-sm ${activeAccordion === index ? 'active bg-blue-50' : ''}`}
                    onClick={() => toggleAccordion(index)}
                  >
                    <p className="title font-semibold text-gray-900 flex items-center justify-between">
                      {faq.question}
                      <div className="toggle-icon">
                        {activeAccordion === index ? (
                          <ChevronDown className="w-5 h-5 text-blue-600" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </p>
                  </div>
                  {activeAccordion === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="acc-content bg-gray-50 border-l border-r border-b border-gray-200 rounded-b-lg"
                    >
                      <div className="text p-4">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
