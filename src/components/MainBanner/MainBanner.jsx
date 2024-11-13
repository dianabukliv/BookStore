import React from 'react';
import './MainBanner.css';

import BookTime from '../../assets/images/mainBanner/BookTime.svg';
import books from '../../assets/images/mainBanner/books.svg';

function MainBanner() {
  return (
    <div className="banner-container">
      <div className="banner-block-text">
        <img className="banner-img" src={BookTime} alt="BookTime" />
        <p className="banner-text ">
          Книжки, що надихають на нові відкриття!
        </p>
      </div>
      <div className="banner-block-img">
        <img className="banner-img" src={books} alt="books" />
      </div>
    </div>
  );
}

export default MainBanner;
