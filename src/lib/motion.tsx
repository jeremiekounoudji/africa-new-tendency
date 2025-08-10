import React from 'react'
import { motion, useReducedMotion, type Variants, type HTMLMotionProps } from 'framer-motion'

export function useRevealVariants(): Variants {
  const prefersReducedMotion = useReducedMotion()
  return {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }
}

type RevealProps = HTMLMotionProps<'div'>

export function Reveal({ children, className = '', ...rest }: RevealProps): JSX.Element {
  const variants = useRevealVariants()
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '0px 0px -80px' }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  )
}


