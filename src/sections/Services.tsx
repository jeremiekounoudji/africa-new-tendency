import React from 'react'
import { Container } from '../components/ui/Container'
import { Heading } from '../components/ui/Heading'
import { services } from '../content/services'
import { Reveal } from '../lib/motion'

// content moved to src/content/services.ts

export function Services(): JSX.Element {
  return (
    <section id="services" className="py-20">
      <Container>
        <Reveal>
          <Heading level={2} className="mb-8">Services</Heading>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <Reveal key={s.title} className="rounded-lg border border-secondary/60 bg-secondary/30 p-6">
              <h3 className="text-lg font-medium">{s.title}</h3>
              <p className="mt-2 text-muted">{s.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}


