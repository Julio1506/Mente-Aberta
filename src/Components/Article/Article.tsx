import { StyledArticle } from './styles'

type ArticleProps = {
  title: string
  description: string
}
export const Article = ({title, description}: ArticleProps) => {
  return (
    <StyledArticle>
      <h3>{title}</h3>
      <p>{description}</p>
    </StyledArticle>
  ) 
}
