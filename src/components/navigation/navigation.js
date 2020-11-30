import './navigation.css';

const Navigation = () => {
  return (
    <>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item"><a href="#biography-link" className="nav__link">биография</a></li>
          <li className="nav__item"><a href="#creation-link" className="nav__link">творчество</a></li>
          <li className="nav__item"><a href="#paintings-link" className="nav__link">картины</a></li>
          <li className="nav__item"><a href="#museums-link" className="nav__link">музеи</a></li>
        </ul>
      </nav>

      <button className="humburger" type="button">
        <span className="visually-hidden">Открыть меню</span>
      </button>
    </>
  )
}

export default Navigation;
