import React from 'react'
import { Container } from '../components/ui/Container'
import { Heading } from '../components/ui/Heading'
import { Reveal } from '../lib/motion'

export function Projects(): JSX.Element {
  const projects = [
    {
      id: 'unie-btp',
      title: 'Unie BTP',
      company: 'Association BTP - Côte d\'Ivoire',
      year: '2024',
      featured: true,
      description: 'Plateforme web complète pour association BTP facilitant le réseautage entre professionnels du bâtiment, gestion de projets et collaboration industrielle avec fonctionnalités en temps réel.',
      technologies: ['Next.js', 'Firebase', 'TypeScript'],
      moreTech: 1,
      image: '/assets/unie-btp.jpg',
      url: 'https://vercel.com/kounoudjijeremie-gmailcoms-projects/unie-btp'
    },
    {
      id: 'microfinance',
      title: 'Système de Gestion Microfinance',
      company: 'Projet Personnel',
      year: '2024',
      featured: true,
      description: 'Système complet de gestion microfinance avec application mobile Flutter pour agents et clients, et tableau de bord admin Next.js avec authentification sécurisée et contrôle d\'accès basé sur les rôles.',
      technologies: ['Flutter', 'Next.js', 'Supabase'],
      moreTech: 2,
      image: '/assets/microfinance.jpg',
      url: 'https://microfinance-demo.com'
    },
    {
      id: 'owakanda',
      title: 'Site Web Restaurant O\'wakanda',
      company: 'Projet Personnel',
      year: '2023',
      featured: false,
      description: 'Site web moderne de restaurant présentant les produits et permettant aux clients de passer des commandes directement via l\'intégration WhatsApp avec des performances optimales.',
      technologies: ['Next.js', 'Firebase', 'WhatsApp API'],
      moreTech: 1,
      image: '/assets/owakanda.jpg',
      url: 'https://wakanda-4e7fc.web.app/'
    },
    {
      id: 'asurex',
      title: 'Site Web Courtier Asurex',
      company: 'Projet Personnel',
      year: '2022',
      featured: false,
      description: 'Site web professionnel pour le courtier d\'assurance Asurex avec design responsive qui présente efficacement les services d\'assurance et les informations de l\'entreprise.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      moreTech: 1,
      image: '/assets/asurex.jpg',
      url: 'https://asurex.org/'
    },
    {
      id: 'kotisation',
      title: 'Application Web Microfinance Kotisation',
      company: 'Projet Personnel',
      year: '2022',
      featured: false,
      description: 'Application web de gestion microfinance construite avec des technologies web modernes pour des opérations financières efficaces et la gestion des clients.',
      technologies: ['HTML', 'CSS', 'PHP'],
      moreTech: 2,
      image: '/assets/kotisation.jpg',
      url: 'https://kotisation.com'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Container>
        <Reveal>
          <div className="text-center mb-16">
            <Heading level={2} className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nos <span className="text-amber-400">Projets</span>
            </Heading>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Découvrez nos réalisations qui transforment l'innovation technologique en Afrique
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Reveal key={project.id} className="group">
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 overflow-hidden hover:bg-gray-800/70 transition-all duration-500 hover:border-amber-400/30 hover:shadow-xl hover:shadow-amber-400/10 transform hover:-translate-y-2">
                
                {/* Header Tags */}
                <div className="absolute top-4 left-4 z-10 flex items-center space-x-2">
                  <div className="flex items-center space-x-1 bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    {project.company}
                  </div>
                  {project.featured && (
                    <div className="flex items-center space-x-1 bg-amber-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-900 to-purple-900 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-purple-500/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-4xl font-bold mb-2">{project.title}</div>
                      <div className="text-sm text-gray-300">Innovation & Technology</div>
                    </div>
                  </div>
                </div>

                {/* Date */}
                <div className="absolute top-4 right-4 z-10 flex items-center space-x-1 text-gray-300 text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  {project.year}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full border border-blue-500"
                      >
                        {tech}
                      </span>
                    ))}
                    <span className="text-gray-400 text-xs">
                      +{project.moreTech} more
                    </span>
                  </div>

                  {/* Call to Action */}
                  <div className="flex items-center justify-between">
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-amber-400 hover:text-amber-300 transition-colors duration-300"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                    </a>
                    
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-400 transition-all duration-300 transform hover:scale-105 text-sm"
                    >
                      Voir le Projet
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                    </a>
                  </div>
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
              Prêt à collaborer sur votre prochain projet ?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Transformons vos idées en solutions digitales innovantes qui propulseront votre entreprise vers le succès.
            </p>
            <a href="#contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105">
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


