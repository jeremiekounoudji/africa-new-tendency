import React, { useState } from 'react'
import { Container } from '../components/ui/Container'
import { Heading } from '../components/ui/Heading'
import { Reveal } from '../lib/motion'

export function Projects(): JSX.Element {
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

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
      url: 'https://unie-btp.vercel.app'
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
      url: null,
      hasModal: true
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
      id: 'destok',
      title: 'Logiciel Destok',
      company: 'Projet Personnel',
      year: '2024',
      featured: true,
      description: 'Logiciel Windows complet de gestion d\'entreprise incluant la gestion de stock, d\'approvisionnement, de vente à crédit, de recouvrement, de relance des impayés et d\'établissement d\'échéancier (type microfinance).',
      technologies: ['Windows', 'Desktop', 'Gestion'],
      moreTech: 2,
      image: '/assets/destok.jpg',
      url: null,
      hasModal: true
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
      url: 'https://3ah.org/kotisation'
    },
    {
      id: 'eba-world',
      title: 'EBA World - Plateforme de Formation',
      company: 'CABINET ECOTREV CONSULTING',
      year: '2024',
      featured: true,
      description: 'Plateforme complète de formation en e-commerce, commerce international et agrobusiness avec masterclass, webinaires et accompagnement personnalisé.',
      technologies: ['Next.js', 'E-commerce', 'Formation'],
      moreTech: 3,
      image: '/assets/eba-world.jpg',
      url: 'https://eba-world.com'
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
              <div 
                className="relative bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 overflow-hidden hover:bg-gray-800/70 transition-all duration-500 hover:border-amber-400/30 hover:shadow-xl hover:shadow-amber-400/10 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => {
                  if (project.hasModal) {
                    setSelectedProject(project)
                    setIsModalOpen(true)
                  } else if (project.url) {
                    window.open(project.url, '_blank', 'noopener,noreferrer')
                  }
                }}
              >
                
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
                    {project.hasModal ? (
                      <button 
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedProject(project)
                          setIsModalOpen(true)
                        }}
                        className="text-amber-400 hover:text-amber-300 transition-colors duration-300"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                        </svg>
                      </button>
                    ) : (
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
                    )}
                    
                    {project.hasModal ? (
                      <button 
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedProject(project)
                          setIsModalOpen(true)
                        }}
                        className="inline-flex items-center px-4 py-2 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-400 transition-all duration-300 transform hover:scale-105 text-sm"
                      >
                        Voir les Détails
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                        </svg>
                      </button>
                    ) : (
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
                    )}
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

      {/* Project Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm">
                    {selectedProject.company}
                  </span>
                  <span className="text-gray-400 text-sm">{selectedProject.year}</span>
                </div>
                
                <div className="bg-gray-700 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-amber-400 mb-3">Fonctionnalités Principales</h4>
                  <ul className="space-y-2 text-gray-300">
                    {selectedProject.id === 'microfinance' ? (
                      <>
                        <li className="flex items-start">
                          <span className="text-amber-400 mr-2">•</span>
                          Création et gestion d'agents microfinance
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-400 mr-2">•</span>
                          Collecte et suivi des prêts
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-400 mr-2">•</span>
                          Gestion des pénalités et intérêts
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-400 mr-2">•</span>
                          Administration complète des clients
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-400 mr-2">•</span>
                          Tableau de bord analytique
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-400 mr-2">•</span>
                          Rapports financiers détaillés
                        </li>
                      </>
                    ) : selectedProject.id === 'destok' ? (
                      <>
                        <li className="flex items-start">
                          <span className="text-amber-400 mr-2">•</span>
                          Gestion complète des stocks
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-400 mr-2">•</span>
                          Système d'approvisionnement
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-400 mr-2">•</span>
                          Vente à crédit et suivi
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-400 mr-2">•</span>
                          Recouvrement automatique
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-400 mr-2">•</span>
                          Relance des impayés
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-400 mr-2">•</span>
                          Établissement d'échéancier
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-400 mr-2">•</span>
                          Application Windows native
                        </li>
                      </>
                    ) : null}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-amber-400 mb-3">Technologies Utilisées</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech: string, index: number) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full border border-blue-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-amber-400 mb-3">Description</h4>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}


