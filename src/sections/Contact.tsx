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
    const mailto = `mailto:afrikanewtendendy@yahoo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
  }

  return (
    <section id="contact" className="py-20">
      <Container>
        <Heading level={2} className="mb-6">Contactez-nous</Heading>
        <form onSubmit={handleSubmit} className="grid gap-4 md:max-w-xl">
          <Input name="name" placeholder="Votre nom" required aria-label="Votre nom" />
          <Input type="email" name="email" placeholder="Votre email" required aria-label="Votre email" />
          <Textarea name="message" placeholder="Votre message" required aria-label="Votre message" />
          <Button type="submit">Envoyer</Button>
        </form>
        <p className="mt-4 text-sm text-muted">Ou envoyez-nous un email : <a className="underline" href="mailto:afrikanewtendendy@yahoo.com">afrikanewtendendy@yahoo.com</a></p>
      </Container>
    </section>
  )
}


