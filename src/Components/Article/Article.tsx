import { StyledArticle } from './styles'

export const Article = ({title, description}) => {
  return (
    <StyledArticle>
      <h3>{title}</h3>
      <p>{description}</p>
    </StyledArticle>
  ) 
}