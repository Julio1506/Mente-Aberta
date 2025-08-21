import { Article } from '../Article/Article'
import { StyledArticleList } from './styles'

export const ArticleList = () => {
  return (
    <StyledArticleList>
      <Article
        title="Fake news sobre vacinas: Entenda os perigos da desinformação."
        description="Pesquisadores e orgãos de saúde todo o mundo reforçam que as vacinas COVID-19 são seguras e eficazes."
      />
      <Article
        title="Preconceito e Desinformação são desafios para a busca de cuidados mentais"
        description="Orgãos afirmam que eventos sobre sáude mental são fundamentais para informar a população e abrir portas para aqueles que necessitam."
      />
    </StyledArticleList>
  )
}
