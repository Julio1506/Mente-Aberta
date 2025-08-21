import { Icon, StyledCard } from './styles'

export const Card = ({title, description, children }) => {
  return (
    <StyledCard>
      <Icon>{children}</Icon>
      <h3>{title}</h3>
      <p>{description}</p>
    </StyledCard>
  ) 
}