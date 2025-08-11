import React from 'react'
import { Container } from '../components/ui/Container'
import { Heading } from '../components/ui/Heading'
import { Reveal } from '../lib/motion'

export function Services(): JSX.Element {
  const services = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: (
        <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
          </svg>
        </div>
      ),
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Zustand', 'HTML5', 'CSS3']
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: (
        <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
          </svg>
        </div>
      ),
      technologies: ['Node.js', 'Firebase', 'Supabase', 'REST APIs', 'GraphQL', 'Docker', 'Express.js', 'MongoDB', 'Java', 'PHP', 'Laravel']
    },
    {
      id: 'mobile',
      title: 'Mobile Development',
      icon: (
        <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
          </svg>
        </div>
      ),
      technologies: ['Flutter', 'Dart', 'GetX', 'iOS Development', 'Android Development', 'React Native']
    },
    {
      id: 'ai',
      title: 'AI & Machine Learning',
      icon: (
        <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
          </svg>
        </div>
      ),
      technologies: ['OpenAI API', 'Cursor AI', 'Kiro IDE', 'Prompt Engineering', 'AI Integration']
    },
    {
      id: 'blockchain',
      title: 'Blockchain & Web3',
      icon: (
        <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </div>
      ),
      technologies: ['Solidity', 'Smart Contracts', 'Web3.js', 'Ethereum', 'Blockchain Security', 'DeFi']
    },
    {
      id: 'design',
      title: 'Design & Tools',
      icon: (
        <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
          </svg>
        </div>
      ),
      technologies: ['Figma', 'UI/UX Design', 'Testing']
    }
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Container>
        <Reveal>
          <div className="text-center mb-16">
            <Heading level={2} className="text-4xl md:text-5xl font-bold text-white mb-4">
             Nos Services et Technologies
            </Heading>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Reveal key={service.id} className="group">
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6 h-full hover:bg-gray-800/70 transition-all duration-300 hover:border-gray-600/50 hover:shadow-lg">
                {/* Icon */}
                <div className="mb-4">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700 text-white text-sm rounded-full border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Call to Action */}
        <Reveal className="text-center mt-16">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-blue-400/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Prêt à transformer votre projet ?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Discutons de vos besoins et découvrons comment nos services peuvent propulser votre entreprise vers le succès digital.
            </p>
            <a href="#contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105">
              Démarrer un Projet →
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


