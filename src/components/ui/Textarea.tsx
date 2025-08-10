import React from 'react'

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement>

export function Textarea({ className = '', rows = 4, ...props }: Props): JSX.Element {
  return (
    <textarea
      rows={rows}
      className={`w-full rounded-md bg-secondary px-3 py-2 text-foreground placeholder:text-muted outline-none ring-1 ring-secondary focus:ring-primary ${className}`}
      {...props}
    />
  )
}


