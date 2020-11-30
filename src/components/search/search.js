import {useState} from 'react';
import './search.css';

const Search = () => {

  const [isOpen, setIsOpen] = useState(false);

  const searchClickHandle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
    
  }

  return (
    <div className="header__search">
      <button
        className="header__search-btn"
        type="button"
        onClick={searchClickHandle}
      >
        <span className="visually-hidden">Поиск</span>
      </button>
      <label className="visually-hidden">Поле ввода поиска</label>
      {isOpen && <input className="header__search-input" type="text"/>}
    </div>
  );
}

export default Search;