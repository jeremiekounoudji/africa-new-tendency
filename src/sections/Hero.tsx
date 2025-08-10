import React from 'react'
import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'
import { Heading } from '../components/ui/Heading'
import { Reveal } from '../lib/motion'

export function Hero(): JSX.Element {
  return (
    <section id="home" className="py-24">
      <Container>
        <Reveal>
          <Heading level={1} className="mb-3">AFRIKA NEW TENDENCY</Heading>
        </Reveal>
        <Reveal className="mt-2">
          <p className="max-w-2xl text-muted">
            Software Development — Web, Mobile, and Product Consulting. We build reliable, performant digital products for startups and enterprises.
          </p>
        </Reveal>
        <Reveal className="mt-8">
          <div className="flex gap-3">
            <a href="#contact"><Button>Contact Us</Button></a>
            <a href="#projects"><Button variant="ghost">View Work</Button></a>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}


