import React from 'react'
import { Container } from '../components/ui/Container'
import { Heading } from '../components/ui/Heading'
import { Reveal } from '../lib/motion'

export function About(): JSX.Element {
  return (
    <section id="about" className="py-20">
      <Container>
        <Reveal>
          <Heading level={2} className="mb-4">About</Heading>
        </Reveal>
        <Reveal>
          <p className="max-w-3xl text-muted">
            We are a team of engineers and designers delivering end-to-end solutions. Our focus is on business impact, craftsmanship, and long-term maintainability.
          </p>
        </Reveal>
      </Container>
    </section>
  )
}


