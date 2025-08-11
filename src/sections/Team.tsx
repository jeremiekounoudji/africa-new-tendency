import React from 'react'
import { Container } from '../components/ui/Container'
import { Heading } from '../components/ui/Heading'
import { team } from '../content/team'
import { Reveal } from '../lib/motion'

export function Team(): JSX.Element {
  return (
    <section id="team" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Container>
        <Reveal>
          <div className="text-center mb-16">
            <Heading level={2} className="text-4xl md:text-5xl font-bold text-white mb-4">
              Notre <span className="text-amber-400">Équipe</span>
            </Heading>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Une équipe expérimentée passionnée par l'innovation technologique en Afrique
            </p>
          </div>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Reveal key={member.id} className="group">
              <div 
                className={`relative bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 overflow-hidden hover:bg-gray-800/70 transition-all duration-500 hover:border-amber-400/30 hover:shadow-xl hover:shadow-amber-400/10 transform hover:-translate-y-2 ${
                  index % 2 === 0 ? 'lg:translate-y-0' : 'lg:translate-y-8'
                }`}
              >
                
                {/* Member Photo */}
                <div className="relative h-48 overflow-hidden p-4">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-amber-400/30">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face';
                      }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  
                  <p className="text-amber-400 font-semibold text-sm mb-2">
                    {member.role}
                  </p>
                  
                  {member.experience && (
                    <p className="text-blue-400 text-sm font-medium mb-3">
                      {member.experience}
                    </p>
                  )}
                  
                  {member.description && (
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {member.description}
                    </p>
                  )}

                  {/* Technologies */}
                  {member.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {member.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full border border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Call to Action */}
        <Reveal className="text-center mt-16">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-amber-400/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Prêt à travailler avec notre équipe ?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Notre équipe expérimentée est prête à transformer vos idées en solutions digitales innovantes.
            </p>
            <a href="#contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105">
              Contactez-nous →
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}


