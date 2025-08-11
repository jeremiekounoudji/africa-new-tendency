import React from 'react'
import { Navbar } from './components/layout/Navbar'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Services } from './sections/Services'
import { Projects } from './sections/Projects'
import { Team } from './sections/Team'
import { Contact } from './sections/Contact'

function App(): JSX.Element {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Team />
        <Contact />
      </main>
    </div>
  )
}

export default App


