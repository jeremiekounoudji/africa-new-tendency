import React from 'react'
import { Container } from '../ui/Container'

export function Navbar(): JSX.Element {
  return (
    <header className="sticky top-0 z-50 border-b border-secondary/50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className="flex h-14 items-center justify-between">
        <a href="#home" className="font-medium">AFRIKA NEW TENDENCY</a>
        <nav className="hidden gap-6 md:flex">
          <a href="#about" className="text-sm text-muted hover:text-foreground">About</a>
          <a href="#services" className="text-sm text-muted hover:text-foreground">Services</a>
          <a href="#projects" className="text-sm text-muted hover:text-foreground">Projects</a>
          <a href="#team" className="text-sm text-muted hover:text-foreground">Team</a>
          <a href="#testimonials" className="text-sm text-muted hover:text-foreground">Testimonials</a>
          <a href="#contact" className="text-sm text-muted hover:text-foreground">Contact</a>
        </nav>
      </Container>
    </header>
  )
}


