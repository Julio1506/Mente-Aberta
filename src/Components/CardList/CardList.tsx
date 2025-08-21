import { CgGames } from 'react-icons/cg'
import { Card } from '../Card/Card'
import { StyledCardList } from './styles'
import { GrArticle } from 'react-icons/gr'
import { LiaVideoSolid } from 'react-icons/lia'
import { FaPeopleGroup } from 'react-icons/fa6'

export const CardList = () => {
  return (
    <StyledCardList>
      <Card
        title="Artigos"
        description="Leia conteúdos informativos sobre polêmicas da saúde."
      >
        <GrArticle />
      </Card>
      <Card
        title="Jogos"
        description="Aprenda se divertindo com atividades interativas."
      >
        <CgGames />
      </Card>
      <Card
        title="Vídeos"
        description="Assista a vídeos educativos e informativos."
      >
        <LiaVideoSolid />
      </Card>
      <Card
        title="Histórias"
        description="Confira relatos e experiências de pessoas reais."
      >
        <FaPeopleGroup />
      </Card>
    </StyledCardList>
  )
}
