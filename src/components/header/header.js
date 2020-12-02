import './header.css';
import logo from '../../img/logo_affinage.svg';
import Search from '../search/search';
import Navigation from '../navigation/navigation';

const Header = () => {
  return (
    <header className="header">
    <h1 className="visually-hidden">борис кустодиев</h1>
    <div className="container">
      <div className="header__wrap">
        <div className="header__content">
          <div className="header__content-top">
            <Search/>
            <Navigation/>
          </div>
          <div className="header__content-center">
            <h3 className="header__years">1878-1927</h3>
            <div className="header__desc">
              <h2 className="header__title">борис кустодиев</h2>
              <p>Художник, запечатлевший на своих ярких и жизнерадостных полотнах сцены русских будней и праздников. Обладал редким безграничным талантом, которому, в первую очередь, было присуще особое чувство и восприятие родной природы.</p>
            </div>
          </div>
          <div className="header__logo">
            <a href="http://affinage.ru/" target="_blank" rel="noreferrer">
              <img src={logo} width="60" height="60" alt="Логотип"/>
            </a>
          </div>
        </div>
        <div className="header__decor"></div>
      </div>
    </div>
  </header>
  );
}

export default Header;
