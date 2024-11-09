import React from 'react';
import './AuthorBanner.css';

import fb from '../../assets/images/authorBanner/fb.svg';
import inst from '../../assets/images/authorBanner/inst.svg';
import Joanne_Rowling from '../../assets/images/authorBanner/Joanne _Rowling.png';
import tw from '../../assets/images/authorBanner/tw.svg';
import book from '../../assets/images/authorBanner/book.jpg';

function AuthorBanner() {
  return (
    <>
      <div className="author-banner bg-color-6">
        <div className="author-banner-container ">
          <div className="author">
            <img
              className="author-img"
              src={Joanne_Rowling}
              alt="Joanne Rowling"
            />
          </div>
          <div className="author-info">
            <p className="author-specialty text3"> Письменниця та філантропка</p>
            <h2 className="author-name h2 color-4">Джоан Роулінг </h2>
            <p className="author-quote text color-1">
              “Нам не потрібна жодна магія, щоби змінити цей світ. В нас самих є
              необхідна для цього сила. Ми здатні уявляти краще життя.”
            </p>
            <button className="author-button color-1 bg-color-5 ">
              Дивитись підбірку
            </button>
            <div className="author-books">
              <img src={book} alt="Book Cover" />
              <img src={book} alt="Book Cover" />
              <img src={book} alt="Book Cover" />
            </div>
            <div className="author-follow">
              <p className="text3 color-2">Стежити за автором</p>
              <div className="author-social-media">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={inst} alt="Instagram" />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={fb} alt="Facebook" />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={tw} alt="Twitter" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthorBanner;
