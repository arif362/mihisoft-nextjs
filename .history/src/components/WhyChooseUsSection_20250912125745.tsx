'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function WhyChooseUsSection() {
  const features = [
    {
      image: "/images/resource/young_talent.png",
      title: "Young Talents",
      description: "Mihisoft has gained success through its good combination of young talents driven forward with ambitious goals and a can-do attitude."
    },
    {
      image: "/images/resource/monitoring.png", 
      title: "Monitoring",
      description: "While we work on your software, we also take a look at exceptions and how your software is doing in production."
    },
    {
      image: "/images/resource/customer_support.png",
      title: "Customer Support", 
      description: "We're happy to provide support to your sales team, engineering team or anyone within your organization. And we are ready to support your customers."
    }
  ]

  return (
    <section className="sec-padd py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title center text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choosing Mihisoft
          </h2>
        </motion.div>

        <div className="row clearfix grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="featured-service col-md-4 col-sm-6 col-xs-12"
            >
              <div className="inner-box wow fadeIn animated bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className="image-box relative">
                  <figure className="image">
                    <a href="#" className="block">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={370}
                        height={250}
                        className="w-full h-64 object-cover"
                      />
                    </a>
                  </figure>
                  <div className="caption-box absolute bottom-0 left-0 right-0 bg-white p-6">
                    <div className="icon mb-3">
                      <span className="text-blue-600 text-2xl">
                        {index === 0 && <i className="icon-graphic"></i>}
                        {index === 1 && <i className="icon-layers"></i>}
                        {index === 2 && <i className="icon-computer"></i>}
                      </span>
                    </div>
                    <h4 className="title text-xl font-semibold text-gray-900">
                      <a href="#" className="hover:text-blue-600 transition-colors">{feature.title}</a>
                    </h4>
                  </div>
                  
                  {/* Overlay */}
                  <div className="overlay-box absolute inset-0 bg-blue-600 bg-opacity-95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="overlay-inner text-center text-white p-6">
                      <div className="icon_box mb-4">
                        <span className="text-white text-3xl">
                          {index === 0 && <i className="icon-graphic"></i>}
                          {index === 1 && <i className="icon-layers"></i>}
                          {index === 2 && <i className="icon-computer"></i>}
                        </span>
                      </div>
                      <div className="overlay-content">
                        <h4 className="title text-xl font-semibold mb-4">
                          <a href="#" className="text-white hover:text-yellow-300 transition-colors">{feature.title}</a>
                        </h4>
                        <div className="text text-sm leading-relaxed text-justify">
                          {feature.description}
                        </div>
                      </div>
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
