import React from 'react'

type Props = React.HTMLAttributes<HTMLHeadingElement> & {
  level?: 1 | 2 | 3 | 4 | 5 | 6
}

export function Heading({ level = 2, className = '', children, ...props }: Props): JSX.Element {
  const Tag = (`h${level}` as unknown) as keyof JSX.IntrinsicElements
  const sizes: Record<number, string> = {
    1: 'text-4xl md:text-5xl font-semibold',
    2: 'text-3xl md:text-4xl font-semibold',
    3: 'text-2xl md:text-3xl font-semibold',
    4: 'text-xl md:text-2xl font-semibold',
    5: 'text-lg font-medium',
    6: 'text-base font-medium',
  }
  return (
    <Tag className={`${sizes[level]} ${className}`} {...props}>
      {children}
    </Tag>
  )
}


