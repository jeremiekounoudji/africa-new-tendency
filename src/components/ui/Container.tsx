import React from 'react'

type Props = React.HTMLAttributes<HTMLDivElement>

export function Container({ className = '', ...props }: Props): JSX.Element {
  return <div className={`mx-auto w-full max-w-6xl px-6 ${className}`} {...props} />
}


