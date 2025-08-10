import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost'
}

export function Button({ variant = 'primary', className = '', ...props }: ButtonProps): JSX.Element {
  const base = 'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-60 disabled:cursor-not-allowed'
  const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
    primary: 'bg-primary text-foreground hover:opacity-90',
    secondary: 'bg-secondary text-foreground hover:opacity-90',
    ghost: 'bg-transparent text-foreground hover:bg-secondary/50',
  }

  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />
}


