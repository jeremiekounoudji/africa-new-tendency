import React, { useState, useEffect } from 'react'
import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'
import { Heading } from '../components/ui/Heading'
import { Reveal } from '../lib/motion'

export function Hero(): JSX.Element {
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
    }, 3000) // Change image every 3 seconds
    
    return () => clearInterval(interval)
  }, [teamImages.length])
  
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400/20 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-fuchsia-500/30 rounded-full animate-float" style={{ animationDelay: '-2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-yellow-400/15 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-fuchsia-500/25 rounded-full animate-float" style={{ animationDelay: '-4s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-28 h-28 bg-yellow-400/20 rounded-full animate-pulse-slow" style={{ animationDelay: '-1s' }}></div>
      </div>

      <Container className="relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Text Content */}
          <Reveal className="text-white space-y-8">
            <div className="space-y-4">
              <Heading level={1} className="text-4xl md:text-6xl font-bold">
                <span className="text-white">Nous sommes</span>
                <br />
                <span className="text-yellow-400">AFRIKA</span>
                <br />
                <span className="text-yellow-400">NEW TENDENCY</span>
              </Heading>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Innovation Technologique Africaine
              </h2>
            </div>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg">
              Leader dans le développement de solutions technologiques innovantes en Afrique. 
              Nous créons des applications web et mobiles de pointe, spécialisés dans Flutter, 
              Next.js, et les technologies émergentes comme l'IA, la blockchain et le Web3.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projects">
                <Button 
                  className="bg-yellow-400 text-black font-bold py-4 px-8 rounded-lg hover:bg-yellow-300 transition-colors duration-300 text-lg border-0"
                >
                  Découvrir Nos Projets
                </Button>
              </a>
              <a href="#contact">
                <Button 
                  variant="ghost"
                  className="border-2 border-yellow-400 text-yellow-400 font-bold py-4 px-8 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 text-lg"
                >
                  Nous Contacter
                </Button>
              </a>
            </div>
            
            <div className="flex items-center space-x-6 pt-4">
              <span className="text-white font-medium">Suivez-nous :</span>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-300 transition-colors duration-300">
                  <span className="text-black font-bold text-lg">W</span>
                </a>
                <a href="#" className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-300 transition-colors duration-300">
                  <span className="text-black font-bold text-lg">L</span>
                </a>
                <a href="#" className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-300 transition-colors duration-300">
                  <span className="text-black font-bold text-lg">@</span>
                </a>
              </div>
            </div>
          </Reveal>
          
          {/* Right Section - Circular Graphic with Technologies */}
          <Reveal className="relative flex justify-center items-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Main Circle */}
              <div className="absolute inset-0 bg-fuchsia-500 rounded-full border-4 border-yellow-400 shadow-2xl">
                              <div className="absolute inset-4 bg-gradient-to-br from-fuchsia-600 to-fuchsia-400 rounded-full flex items-center justify-center overflow-hidden">
                <img 
                  src={teamImages[currentImageIndex]} 
                  alt="Team Member" 
                  className="w-full h-full object-cover rounded-full transition-opacity duration-1000"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face';
                  }}
                />
              </div>
              </div>
              
              {/* Technology Labels */}
              <div className="absolute -top-4 -left-4 bg-white rounded-full px-4 py-2 shadow-lg animate-tech-float">
                <span className="text-black font-bold text-sm">Flutter & Dart</span>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-white rounded-full px-4 py-2 shadow-lg animate-tech-float" style={{ animationDelay: '0.5s' }}>
                <span className="text-black font-bold text-sm">Next.js</span>
              </div>
              
              <div className="absolute top-1/2 -left-8 bg-white rounded-full px-4 py-2 shadow-lg animate-tech-float" style={{ animationDelay: '1s' }}>
                <span className="text-black font-bold text-sm">React + Vite</span>
              </div>
              
              <div className="absolute top-1/2 -right-8 bg-white rounded-full px-4 py-2 shadow-lg animate-tech-float" style={{ animationDelay: '1.5s' }}>
                <span className="text-black font-bold text-sm">Tailwind CSS</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full px-4 py-2 shadow-lg animate-tech-float" style={{ animationDelay: '2s' }}>
                <span className="text-black font-bold text-sm">Blockchain & Web3</span>
              </div>
              
              <div className="absolute -bottom-4 right-0 bg-white rounded-full px-4 py-2 shadow-lg animate-tech-float" style={{ animationDelay: '2.5s' }}>
                <span className="text-black font-bold text-sm">AI Integration</span>
              </div>
              
              <div className="absolute bottom-8 -right-8 bg-white rounded-full px-4 py-2 shadow-lg animate-tech-float" style={{ animationDelay: '3s' }}>
                <span className="text-black font-bold text-sm">Supabase</span>
              </div>
            </div>
          </Reveal>
        </div>
        
        {/* Scroll Indicator */}
        <Reveal className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-white text-sm mb-2">Défiler pour explorer</p>
          <div className="w-6 h-6 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
        </Reveal>
      </Container>
    </section>
  )
}


