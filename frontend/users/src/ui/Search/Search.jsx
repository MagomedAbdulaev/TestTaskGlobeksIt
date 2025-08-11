import LoupeIcon from '../../assets/icons/loupe.svg';
import './Search.css';

function Search({ searchValue, setSearchValue }) {

  return (
    <div className='search'>
      <input
        type="text"  // Можно использовать search, но так как в конце input
        //  появляется крестик для очистки того, что было введенно, я использую text
        placeholder=''
        className='search__input'
        value={searchValue}
        onChange={(ev) => {setSearchValue(ev.target.value)}}
      />
      <img
        src={LoupeIcon}
        alt="Поиск"
        className='search__image'
        width='20'
        height='20'
      />
    </div>
  )
}

export default Search;
