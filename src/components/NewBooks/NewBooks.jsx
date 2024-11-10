import React, { Component } from 'react';
import './NewBooks.css';

export class NewBooks extends Component {
  render() {
    return (
      <>
      <div className="block_new">
        <div>
        <button className='new_button'>
          Новинки    
        <img src="/img/vector.svg" className='vector' width="19" height="8"/>
        </button>
        </div>
        <div>
        <div className="book_container">
  <div className="book_component">
    <div className="image_container">
      <p className="imposition new">Новинка</p>
      <img src="/img/book.jpg" alt="Book" className="book_img" />
    </div>
    <p className="book_code">00000000000</p>
    <h2 className="book_name">Назва Книги Назва Книги Назва Книги Назва Книги</h2>
    <p className="book_avtor">Автор Книги</p>
    <b className="book_price">800 грн</b>
    <p className="in_stock"><img src="/img/check_circle_outline.svg" className="check_circle" />В наявності</p>
    <div className="button-container">
      <button className="button_heart"><img src="/img/heart.svg" className="heart" /></button>
      <button className="button_cart"><img src="/img/shopping_cart.svg" className="cart" /></button>
    </div>
  </div>
  
</div>

        </div>
      </div>
      <div className="block_sales">
      <div>
      <button className='sales_button'>
      Акції    
      <img src="/img/vector.svg" className='vector' width="19" height="8"/>
      </button>
      </div>
      <div>
      <div className="book_container">
<div className="book_component">
  <div className="image_container">
    <p className="imposition sales">Акція</p>
    <p className="imposition percent">-10%</p>
    <img src="/img/book.jpg" alt="Book" className="book_img" />
  </div>
  <p className="book_code">00000000000</p>
  <h2 className="book_name">Назва Книги Назва Книги Назва Книги Назва Книги</h2>
  <p className="book_avtor">Автор Книги</p>
  <div className='book_price_container'>
  <p className='book_no_price'>900 Грн</p>
  <b className="book_price">800 грн</b>
  </div>
  <p className="in_stock"><img src="/img/check_circle_outline.svg" className="check_circle" />В наявності</p>
  <div className="button-container">
    <button className="button_heart"><img src="/img/heart.svg" className="heart" /></button>
    <button className="button_cart"><img src="/img/shopping_cart.svg" className="cart" /></button>
  </div>
</div>
</div>

      </div>
    </div>
    <div className="block_new">
        <div>
        <button className='top_seller'>
        Топ продажу    
        <img src="/img/vector.svg" className='vector' width="19" height="8"/>
        </button>
        </div>
        <div>
        <div className="book_container">
  <div className="book_component">
    <div className="image_container">
      <p className="imposition top">Топ продажу</p>
      <img src="/img/book.jpg" alt="Book" className="book_img" />
    </div>
    <p className="book_code">00000000000</p>
    <h2 className="book_name">Назва Книги Назва Книги Назва Книги Назва Книги</h2>
    <p className="book_avtor">Автор Книги</p>
    <b className="book_price">800 грн</b>
    <p className="in_stock"><img src="/img/check_circle_outline.svg" className="check_circle" />В наявності</p>
    <div className="button-container">
      <button className="button_heart"><img src="/img/heart.svg" className="heart" /></button>
      <button className="button_cart"><img src="/img/shopping_cart.svg" className="cart" /></button>
    </div>
  </div>
</div>

        </div>
      </div>
    </>
    )
  }
}
