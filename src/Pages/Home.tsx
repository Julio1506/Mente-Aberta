import { ArticleList } from '../Components/ArticleList/ArticleList'
import { CardList } from '../Components/CardList/CardList'
import { Footer } from '../Components/Footer/Footer'
import { Header } from '../Components/Header/Header'
import { StyledHome } from '../Styles/globalStyles'

export const Home = () => {
  return (
    <>
      <Header />
      <StyledHome>
        <CardList />
        <ArticleList />
      </StyledHome>
      <Footer />
    </>
  )
}
