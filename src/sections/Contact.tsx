import React from 'react'
import { Container } from '../components/ui/Container'
import { Heading } from '../components/ui/Heading'
import { Input } from '../components/ui/Input'
import { Textarea } from '../components/ui/Textarea'
import { Button } from '../components/ui/Button'
import { company } from '../content/company'

export function Contact(): JSX.Element {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '')
    const email = String(data.get('email') || '')
    const message = String(data.get('message') || '')
    const subject = `New inquiry from ${name}`
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    const mailto = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
  }

  return (
    <section id="contact" className="py-20">
      <Container>
        <Heading level={2} className="mb-6">Contact</Heading>
        <form onSubmit={handleSubmit} className="grid gap-4 md:max-w-xl">
          <Input name="name" placeholder="Your name" required aria-label="Your name" />
          <Input type="email" name="email" placeholder="Your email" required aria-label="Your email" />
          <Textarea name="message" placeholder="Your message" required aria-label="Your message" />
          <Button type="submit">Send</Button>
        </form>
        <p className="mt-4 text-sm text-muted">Or email us: <a className="underline" href={`mailto:${company.email}`}>{company.email}</a></p>
      </Container>
    </section>
  )
}


