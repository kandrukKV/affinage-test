import './social-share.css';

const SocialShare = () => {
  return (
    <ul className="social__list">
      <li className="social__item">
        <a href="https://vk.com/" className="social__link">
          <svg width="21" height="12">
            <use xlinkHref="#icon-vk"/>
          </svg>
        </a>
        <span className="social__count">105</span>
      </li>
      <li className="social__item">
        <a href="https://twitter.com" className="social__link">
          <svg width="16" height="13">
            <use xlinkHref="#icon-twitter"/>
          </svg>
        </a>
        <span className="social__count">96</span>
      </li>
      <li className="social__item">
        <a href="https://facebook.com" className="social__link">
          <svg width="9" height="18">
            <use xlinkHref="#icon-fb"/>
          </svg>
        </a>
      </li>
    </ul>
  );
}

export default SocialShare;
