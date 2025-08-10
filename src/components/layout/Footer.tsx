import React from 'react'
import { Container } from '../ui/Container'

export function Footer(): JSX.Element {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-secondary/50 py-10">
      <Container className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted">© {year} AFRIKA NEW TENDENCY</p>
        <div className="text-sm text-muted">Built with React + Vite</div>
        <a href="#home" className="text-sm underline">Back to top</a>
      </Container>
    </footer>
  )
}


