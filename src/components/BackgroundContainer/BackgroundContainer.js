/* eslint-disable no-alert */
import './BackgroundContainer.scss';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function BackgroundContainer() {
  return (
    <div className="BackgroundContainer">

      <div className="BackgroundContainer-sky">
        <div className="BackgroundContainer-stars" />
        <div className="BackgroundContainer-clouds" />
      </div>

      <div className="BackgroundContainer-app-content">
        <Header />
        <Main />
        <Footer />
      </div>

    </div>
  );
}

export default BackgroundContainer;
