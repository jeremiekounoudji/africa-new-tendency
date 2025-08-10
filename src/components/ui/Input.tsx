import React from 'react'

type Props = React.InputHTMLAttributes<HTMLInputElement>

export function Input({ className = '', ...props }: Props): JSX.Element {
  return (
    <input
      className={`w-full rounded-md bg-secondary px-3 py-2 text-foreground placeholder:text-muted outline-none ring-1 ring-secondary focus:ring-primary ${className}`}
      {...props}
    />
  )
}


