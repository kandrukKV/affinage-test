import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {ScreenTypes, MAX_MOBILE_RES, DIFF_MOBILE_POSITION, DIFF_DESC_POSITION} from '../../const';

import './slider.css';

class Slider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      screenType: ScreenTypes.MOBILE,
      activeSlide: 0,
      currentTrackPosition: 0,
      touchStardPosition: 0,
      touchEndPosition: 0
    }

    this.wrapperRef = React.createRef();

    this.setNextSlideHandle = this.setNextSlideHandle.bind(this);
    this.setPrevSlideHandle = this.setPrevSlideHandle.bind(this);
    this.clickSliderItemHandle = this.clickSliderItemHandle.bind(this);
    this.tuochStartHandle = this.tuochStartHandle.bind(this);
    this.tuochEndHandle = this.tuochEndHandle.bind(this);
  }

  componentDidMount() {

    const screenType = window.innerWidth > MAX_MOBILE_RES ? ScreenTypes.DESCTOP : ScreenTypes.MOBILE;
    this.setState({screenType})
  }

  setNextSlideHandle() {
    const {activeSlide, currentTrackPosition} = this.state;
    const position = currentTrackPosition - DIFF_DESC_POSITION;
  
    this.wrapperRef.current.style.transform = `translateX(${position}px)`;

    this.setState({
      activeSlide: activeSlide + 1,
      currentTrackPosition: position
    })
  }

  setPrevSlideHandle() {
    const {activeSlide, currentTrackPosition} = this.state;
    const position = currentTrackPosition + DIFF_DESC_POSITION;

    this.wrapperRef.current.style.transform = `translateX(${position}px)`;

    this.setState({
      activeSlide: activeSlide - 1,
      currentTrackPosition: position
    })
  }

  clickSliderItemHandle(slideItem) {
    this.setState({
      activeSlide: slideItem
    })
  }

  tuochStartHandle(position) {
    this.setState({
      touchStardPosition: position
    })
  }

  tuochEndHandle(endPosition) {
    const {currentTrackPosition, touchStardPosition} = this.state;
    const diffPosition = touchStardPosition - endPosition;

    if (diffPosition === 0) {
      return;
    }

    let position = currentTrackPosition;
    const wrapper = this.wrapperRef.current;

    if (diffPosition > 0) {
      position = position - DIFF_MOBILE_POSITION;
    } else {
      position = position + DIFF_MOBILE_POSITION;
    }

    wrapper.style.transform = `translateX(${position}px)`;

    this.setState({
      currentTrackPosition: position
    })
  }

  render() {

    const {slides} = this.props;
    const {activeSlide, currentTrackPosition, screenType} = this.state;

    return (
      <section id="paintings-link">
        
        <div className="container pictures">
          <div className="content">
            <div className="pictures__wrap">
              <div className="pictures__top">
                <div className="slider-wrap">
                  <div className="slider__container">
                    <div className="slider__track" ref={this.wrapperRef} style={{transform: `translateX(${currentTrackPosition}px)`}}>
                      {slides.map((slide, index) => {
                        return (
                          <div
                            key={`slide-${slide.id}`}
                            className={`slider__item ${index === activeSlide ? "slider__item--active" : ""}`}
                            onClick={() => this.clickSliderItemHandle(index)}
                            onTouchStart={
                              screenType === ScreenTypes.MOBILE
                              ? (touchStartEvent) => this.tuochStartHandle(touchStartEvent.touches[0].clientX)
                              : () => {}
                            }
                            onTouchEnd={
                              screenType === ScreenTypes.MOBILE
                              ? (touchMoveEvent) => this.tuochEndHandle(touchMoveEvent.changedTouches[0].clientX)
                              : () => {}
                            }
                          >
                            <img src={slide.src} width="120" height="90" alt={slide.title}/>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>

                <p className="pictures__count pictures__count--mobile">{activeSlide + 1} <span>/ {slides.length}</span></p>

                <div className="slider__all">
                  <a href="https://www.shutterstock.com/ru/" target="_blank" rel="noreferrer">все картины
                    <svg width="5" height="8">
                      <use xlinkHref="#icon-right-arrow-sm"/>
                    </svg>
                  </a>
                </div>

              </div>

              <div className="slider__preview">
                <img src={slides[activeSlide].src} width="920" height="530" alt="Название картины"/>
              </div>

              <div className="pictures__bottom">
                <button
                  className="slider__btn"
                  type="button"
                  onClick={this.setPrevSlideHandle}
                  disabled={activeSlide === 0}
                >
                  <span className="visually-hidden">Стрелка влево</span>
                  <svg width="40" height="15">
                    <use xlinkHref="#arrow-left"/>
                  </svg>
                </button>
                <div className="pictures__info">
                  <p className="pictures__name">{slides[activeSlide].title}</p>
                  <p className="pictures__count">{activeSlide + 1} <span>/ {slides.length}</span></p>
                </div>
                <button
                  className="slider__btn"
                  type="button"
                  onClick={this.setNextSlideHandle}
                  disabled={activeSlide === slides.length - 1}
                >
                  <span className="visually-hidden">Стрелка вправо</span>
                  <svg width="40" height="15">
                    <use xlinkHref="#arrow-right"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  slides: state.slides
});

export default connect(mapStateToProps)(Slider);
