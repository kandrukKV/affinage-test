import './museums.css';

const Museums = () => {
  return (
    <section className="museums" id="museums-link">
      <div className="container">

        <h2 className="content content__title museums__title">музеи</h2>

        <div className="museums__map">
          <svg className="museums__map-pin" width="30" height="40">
            <use xlinkHref="#icon-pin"/>
          </svg>
      </div>

      <ul className="content museums__list">
        <li className="museums__item">
          <p className="museums__name">
            <svg className="museums__pin" width="14" height="18">
              <use xlinkHref="#icon-pin"/>
            </svg>
            <a href="https://www.rusmuseum.ru/" target="_blank" rel="noreferrer">Русский музей</a>
          </p>
          <p className="museums__adress">191186, Санкт-Петербург, Инженерная ул. 4, +7(812)595-42-40</p>
        </li>
        <li className="museums__item">
          <p className="museums__name">
            <svg className="museums__pin" width="14" height="18">
              <use xlinkHref="#icon-pin"/>
            </svg>
            <a href="https://www.tretyakovgallery.ru/" target="_blank" rel="noreferrer">Третьяковская галлерея</a>
            
          </p>
          <p className="museums__adress">119017, Москва, Лаврушинский переулок, 10, +7(495)957-07-27</p>
        </li>
        <li className="museums__item">
          <p className="museums__name">
            <svg className="museums__pin" width="14" height="18">
              <use xlinkHref="#icon-pin"/>
            </svg>
            <a href="http://http://mamm-mdf.ru/" target="_blank" rel="noreferrer">Мультимедиа Арт Музей</a>
          </p>
          <p className="museums__adress">191186, Москва, Гороховский переулок, 7, +7(495)632-16-81</p>
        </li>
      </ul>

    </div>
  </section>
  );
}

export default Museums;
