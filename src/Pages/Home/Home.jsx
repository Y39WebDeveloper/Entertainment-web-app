import { RecommendedSection, SearchInput, TrendingSection } from '../../Components'
import './Home.css'

function Home() {
  return (
    <div className='home-page'>
      <SearchInput />
      <TrendingSection/>
      <RecommendedSection/>
    </div>
  )
}

export default Home