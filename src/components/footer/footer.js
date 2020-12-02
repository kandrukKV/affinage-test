import './footer.css';

const Footer = () => {
  return (
    <footer>
    <div className="container footer">
      <div className="content footer__wrapp">
        <ul className="footer-nav__list">
          <li className="footer-nav__item"><a href="#biography-link" className="footer-nav__link">биография</a></li>
          <li className="footer-nav__item"><a href="#creation-link" className="footer-nav__link">творчество</a></li>
          <li className="footer-nav__item"><a href="#paintings-link" className="footer-nav__link">картины</a></li>
          <li className="footer-nav__item"><a href="#museums-link" className="footer-nav__link">музеи</a></li>
        </ul>

        <ul className="footer__social-list">
          <li className="footer__social-item">
            <a href="https://vk.com/" className="social__link" target="_blank" rel="noreferrer">
              <svg className="footer__social-icon" width="24" height="14">
                <use xlinkHref="#icon-vk"/>
              </svg>
            </a>
          </li>
          <li className="footer__social-item">
            <a href="https://twitter.com" className="social__link" target="_blank" rel="noreferrer">
              <svg className="footer__social-icon" width="20" height="16">
                <use xlinkHref="#icon-twitter"/>
              </svg>
            </a>
          </li>
          <li className="footer__social-item">
            <a href="https://facebook.com" className="social__link" target="_blank" rel="noreferrer">
              <svg className="footer__social-icon" width="11" height="22">
                <use xlinkHref="#icon-fb"/>
              </svg>
            </a>
            
          </li>
        </ul>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
