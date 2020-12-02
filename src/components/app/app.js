import './app.css';

import Header from '../header/header';
import Biography from '../biography/biography';
import Creation from '../creation/creation';
import Slider from '../slider/slider';
import Museums from '../museums/museums';
import Footer from '../footer/footer';

const App = () => {
  return (
    <>
      <Header/>
      <Biography/>
      <Slider/>
      <Creation/>
      <Museums/>
      <Footer/>
    </>
  )
}

export default App;
