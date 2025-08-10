import React from 'react'
import { Container } from '../components/ui/Container'
import { Heading } from '../components/ui/Heading'
import { testimonials } from '../content/testimonials'
import { Reveal } from '../lib/motion'

// content moved to src/content/testimonials.ts

export function Testimonials(): JSX.Element {
  return (
    <section id="testimonials" className="py-20">
      <Container>
        <Reveal>
          <Heading level={2} className="mb-8">Testimonials</Heading>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t, idx) => (
            <Reveal key={idx} className="rounded-lg border border-secondary/60 bg-secondary/30 p-6">
              <p className="text-lg">“{t.quote}”</p>
              <footer className="mt-3 text-sm text-muted">— {t.person}, {t.roleCompany}</footer>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}


