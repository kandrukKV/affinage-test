import {PureComponent} from 'react';
import './biography.css';
import SocialShare from '../social-share/social-share';
import ShowMore from '../show-more/show-more';
import DataApi from '../../service/data-api';

class Biography extends PureComponent {

  constructor() {
    super();
    this.state = {
      additionText: null
    }
    this.dataApi = new DataApi();

    this.readMoreHandle = this.readMoreHandle.bind(this);
    this.hideAdditionTextHandle = this.hideAdditionTextHandle.bind(this);
  }

  readMoreHandle() {
    this.dataApi.getData()
      .then(({opening_crawl}) => {
        this.setState({
          additionText: opening_crawl
        })
      })
      .catch(() => console.log('Ошибка сервера'));
  }

  hideAdditionTextHandle() {
    this.setState({
      additionText: null
    })
  }

  render() {

    const {additionText} = this.state;

    return (
      <section className="biography" id="biography-link">
      <div className="container">
        <div className="content">
          <div className="biography__wrapp">
            <h2 className="content__title biography__title">биография</h2>
            <div className="biography__content">
              <p className="biography__desc">Борис Кустодиев родился 7 марта 1878 года в Астрахани. Отца, преподавателя духовной семинарии, не стало, когда мальчику было чуть больше года. Мать осталась вдовой в 25 лет и содержала четверых детей.</p>
              <ul className="biography__list">
                <li className="biography__item">
                  <div className="biography__data">1887</div>
                  <div className="biography__event">Борис сначала учился в церковно-приходской школе, потом в гимназии. Когда ему было девять лет, в город привезли выставку художников-передвижников. Мальчика настолько впечатлила живопись, что он твердо решил научиться рисовать так же искусно. Мать нашла деньги, чтобы Борис смог брать уроки у известного в Астрахани художника Павла Власова. </div>
                </li>
  
                <li className="biography__item">
                  <div className="biography__data">1896</div>
                  <div className="biography__event">Окончив семинарию, в 1896 году Кустодиев отправился учиться в Москву, но в художественную школу его не приняли: Борису уже исполнилось 18 и он был слишком взрослым. Тогда Кустодиев поехал в Петербург, где подал документы в Высшее художественное училище при Академии художеств.</div>
                </li>
              </ul>
              { additionText ?
                  ( 
                    <p className="biography__desc">
                      {additionText}
                    </p>
                  )
                  : additionText
              }
            </div>
          </div>
          <div className="biography__bottom">
            <SocialShare/>
            <ShowMore
              title={
                additionText ? 'скрыть' : 'читать больше'
              }
              onClickReadMore={
                additionText ? this.hideAdditionTextHandle : this.readMoreHandle
              }
            />
          </div>
          
        </div>
      </div>
    </section>
    );
  }
}

export default Biography;
