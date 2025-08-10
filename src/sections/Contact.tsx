import React from 'react'
import { Container } from '../components/ui/Container'
import { Heading } from '../components/ui/Heading'
import { Input } from '../components/ui/Input'
import { Textarea } from '../components/ui/Textarea'
import { Button } from '../components/ui/Button'
import { company } from '../content/company'

export function Contact(): JSX.Element {
  return (
    <section id="contact" className="py-20">
      <Container>
        <Heading level={2} className="mb-6">Contact</Heading>
        <form action="https://formspree.io/f/your-id" method="POST" className="grid gap-4 md:max-w-xl">
          <Input name="name" placeholder="Your name" required aria-label="Your name" />
          <Input type="email" name="email" placeholder="Your email" required aria-label="Your email" />
          <Textarea name="message" placeholder="Your message" required aria-label="Your message" />
          <input type="text" name="_gotcha" className="hidden" aria-hidden="true" />
          <Button type="submit">Send</Button>
        </form>
        <p className="mt-4 text-sm text-muted">Or email us: <a className="underline" href={`mailto:${company.email}`}>{company.email}</a></p>
      </Container>
    </section>
  )
}


