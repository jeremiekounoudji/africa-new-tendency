import React from 'react'
import { Container } from '../components/ui/Container'
import { Heading } from '../components/ui/Heading'
import { projects } from '../content/projects'
import { Reveal } from '../lib/motion'

// content moved to src/content/projects.ts

export function Projects(): JSX.Element {
  return (
    <section id="projects" className="py-20">
      <Container>
        <Reveal>
          <Heading level={2} className="mb-8">Projects</Heading>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <Reveal key={p.title} className="rounded-lg border border-secondary/60 bg-secondary/30 p-6">
              <h3 className="text-lg font-medium">{p.title}</h3>
              <p className="mt-2 text-muted">{p.summary}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted">
                {p.tech.map((t) => (
                  <span key={t} className="rounded bg-secondary/60 px-2 py-1">{t}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}


