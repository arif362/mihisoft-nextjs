'use client'

import { motion } from 'framer-motion'
import { FaFacebook, FaLinkedin, FaSkype } from 'react-icons/fa'

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'Engr. Md.Asraful Islam',
      position: 'Chairman',
      image: '/images/team/ashraf.jpeg',
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
      social: {
        facebook: 'https://www.facebook.com/profile.php?id=100007704107082&mibextid=ZbWKwL',
        linkedin: '#',
        skype: '#'
      }
    }
  ]

  return (
    <section 
      className="our-team style-2 sec-padd py-20 bg-cover bg-center bg-no-repeat relative"
      id="our_team"
      style={{
        backgroundImage: 'url(/images/background/3.jpg)',
      }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title center text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Leadership By
          </h2>
        </motion.div>
        
        <div className="row grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="col-md-6 col-sm-6 col-xs-12"
            >
              <div className="single-team-member bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <figure className="img-box relative group overflow-hidden">
                  <a href="#" className="block">
                    <img 
                      src={member.image}
                      alt={member.name}
                      width={270}
                      height={235}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </a>
                  <div className="overlay absolute inset-0 bg-blue-600 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="inner-box">
                      <ul className="social flex space-x-4">
                        <li>
                          <a 
                            href={member.social.facebook} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white hover:text-yellow-300 transition-colors"
                          >
                            <FaFacebook className="w-6 h-6" />
                          </a>
                        </li>
                        <li>
                          <a 
                            href={member.social.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white hover:text-yellow-300 transition-colors"
                          >
                            <FaLinkedin className="w-6 h-6" />
                          </a>
                        </li>
                        <li>
                          <a 
                            href={member.social.skype}
                            className="text-white hover:text-yellow-300 transition-colors"
                          >
                            <FaSkype className="w-6 h-6" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </figure>
                <div className="author-info text-center p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h4>
                  <a href="#" className="block">
                    <p className="position text-blue-600 font-medium">
                      {member.position}
                    </p>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
