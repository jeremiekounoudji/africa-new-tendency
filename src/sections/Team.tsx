import React from 'react'
import { Container } from '../components/ui/Container'
import { Heading } from '../components/ui/Heading'
import { team } from '../content/team'
import { Reveal } from '../lib/motion'

// content moved to src/content/team.ts

export function Team(): JSX.Element {
  return (
    <section id="team" className="py-20">
      <Container>
        <Reveal>
          <Heading level={2} className="mb-8">Team</Heading>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {team.map((m) => (
            <Reveal key={m.name} className="rounded-lg border border-secondary/60 bg-secondary/30 p-6">
              <div className="text-lg font-medium">{m.name}</div>
              <div className="mt-1 text-sm text-muted">{m.role}</div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}


