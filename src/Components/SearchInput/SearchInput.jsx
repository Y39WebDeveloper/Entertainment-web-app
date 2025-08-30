import './SearchInput.css'
import IconSearch from '/assets/icon-search.svg'

function SearchInput() {
  return (
    <label className='search-input'>
        <div className="icon"><img src={IconSearch} alt= "search" /></div>
        <input className='txt-2-l' type="search" placeholder='Search for movies or TV series' />
    </label>
  )
}

export default SearchInput