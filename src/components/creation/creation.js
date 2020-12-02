import './creation.css';
import SocialShare from '../social-share/social-share';
import ShowMore from '../show-more/show-more';
import contentImg1 from '../../img/content_img1.jpg';
import contentImg2 from '../../img/content_img2.jpg';

const Creation = () => {
  return (
    <section id="creation-link">
    <div className="container creation">
      <div className="content">
        <div className="creation__head">
          <h2 className="content__title creation__title">творчество</h2>
          <p className="creation__entry">Трудно найти другого живописца, настолько горячо влюбленного в 
            провинциальную Россию: самобытную, яркую, удивляющую.
          </p>
        </div>
        <div className="creation__subhead">
          <p className="creation__desc">Как и большинство работ автора, пейзажные полотна Кустодиева отличаются особой выразительностью, 
            яркостью и насыщенностью цветовых планов. На картинах Кустодиева природа всегда представляет собой нечто гораздо большее, 
            чем просто пейзажное изображение.
          </p>
          <div className="creation__desc-img">
            <img src={contentImg1} width="240" height="173" alt="картинка"/>
          </div>
        </div>
        <div className="creation__img-wrap">
          <img src={contentImg2} width="920" height="667" alt="красивая картинка"/>
        </div>
        <div className="creation__detail">
          <p className="creation__desc">Особенности творчества художника Бориса Кустодиева: любил жанр портрета-картины, когда характер героя 
            раскрывается через окружающий его пейзаж, интерьер или даже служащую фоном жанровую сцену; не жалел для бытовых 
            сцен декоративности и зрелищности; 
            с большой симпатией писал жизнь провинции.
          </p>
          <p className="creation__desc">Даже в самые беспросветные времена полотна Кустодиева лучились здоровьем, радостью и любовью 
            к жизни. Сахарные сугробы и плавящиеся под солнцем купола. Полыхающие арбузы и красавицы, 
            не уступающие арбузам ни интенсивностью румянца, 
            ни гладкой округлостью форм. 
          </p>
        </div>

        <div className="creation__bottom">
          <SocialShare/>
          <ShowMore
            title={'читать больше'}
            onClickReadMore={() => {
              window.open('https://ru.wikipedia.org/wiki/%D0%9A%D1%83%D1%81%D1%82%D0%BE%D0%B4%D0%B8%D0%B5%D0%B2,_%D0%91%D0%BE%D1%80%D0%B8%D1%81_%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2%D0%B8%D1%87', '_blank')
            }}
          />
        </div>

      </div>
    </div>
  </section>
  );
}

export default Creation;
