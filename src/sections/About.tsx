import React, { useState, useEffect } from 'react'
import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'
import { Heading } from '../components/ui/Heading'
import { Reveal } from '../lib/motion'

export function About(): JSX.Element {
  const teamImages = [
    '/assets/christian-photo.png',
    '/assets/parfaite-photo.png',
    '/assets/jeremie.png',
    '/assets/fabrice-photo.png'
  ]
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % teamImages.length)
    }, 4000) // Change image every 4 seconds (slightly slower than hero)
    
    return () => clearInterval(interval)
  }, [teamImages.length])
  
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Section - Portrait */}
          <Reveal className="lg:col-span-1">
            <div className="relative">
              {/* Main Portrait */}
              <div className="relative w-full max-w-md mx-auto">
                <div className="relative">
                  <img 
                    src={teamImages[currentImageIndex]} 
                    alt="Team Member" 
                    className="w-full h-auto rounded-lg border-4 border-yellow-400 shadow-2xl transition-opacity duration-1000"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face';
                    }}
                  />
                  
                  {/* Tech Icon */}
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-fuchsia-500 rounded-lg flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Section - Content */}
          <Reveal className="lg:col-span-2 text-white space-y-8">
            {/* Main Title */}
            <div className="text-center lg:text-left">
              <Heading level={2} className="text-4xl md:text-5xl font-bold mb-4">
                À Propos de <span className="text-yellow-400">Nous</span>
              </Heading>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0">
                Entreprise technologique africaine passionnée par la création d'applications innovantes avec des technologies modernes
              </p>
            </div>

            {/* Greeting and Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">&lt;/&gt;</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Salut, nous sommes <span className="text-yellow-400">Afrika New Tendency</span>
                </h3>
              </div>

              {/* Experience Paragraph */}
              <p className="text-lg text-gray-300 leading-relaxed">
                <span className="text-blue-400 font-semibold">6-8 années d'expérience</span> dans le développement full-stack, 
                spécialisés dans la création d'applications web et mobiles modernes qui résolvent des problèmes réels 
                et transforment les entreprises africaines.
              </p>

              {/* Work History */}
              <p className="text-lg text-gray-300 leading-relaxed">
                Basés en <span className="text-fuchsia-400 font-semibold">République du Bénin</span>, nous avons contribué à des projets 
                d'impact majeur incluant des plateformes de gestion microfinance, des applications blockchain, 
                et des solutions mobiles qui servent des milliers d'utilisateurs à travers l'Afrique.
              </p>

              {/* Expertise */}
              <p className="text-lg text-gray-300 leading-relaxed">
                Notre expertise s'étend sur <span className="text-green-400 font-semibold">React/Next.js</span>, 
                <span className="text-green-400 font-semibold"> Flutter</span>, 
                <span className="text-green-400 font-semibold"> Node.js</span>, 
                <span className="text-green-400 font-semibold"> Laravel</span>, 
                <span className="text-green-400 font-semibold"> Java</span>, 
                <span className="text-green-400 font-semibold"> Solidity</span>, et les technologies d'IA. 
                Nous sommes passionnés par l'écriture de code propre et efficace, et par la livraison d'expériences 
                utilisateur exceptionnelles qui répondent aux besoins spécifiques du marché africain.
              </p>
            </div>

            {/* Call to Action */}
            <div className="pt-4">
              <a href="#contact">
                <Button 
                  className="bg-yellow-400 text-black font-bold py-4 px-8 rounded-lg hover:bg-yellow-300 transition-colors duration-300 text-lg border-0"
                >
                  Travaillons Ensemble
                </Button>
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}


