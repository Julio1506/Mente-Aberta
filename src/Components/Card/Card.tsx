import type { ReactNode } from 'react'
import { Icon, StyledCard } from './styles'

type CardProps = {
  title: string
  description: string
  children?: ReactNode
}

export const Card = ({title, description, children }: CardProps) => {
  return (
    <StyledCard>
      <Icon>{children}</Icon>
      <h3>{title}</h3>
      <p>{description}</p>
    </StyledCard>
  ) 
}
