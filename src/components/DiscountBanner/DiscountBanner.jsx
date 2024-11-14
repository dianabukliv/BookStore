import React from 'react'
import './DiscountBanner.css'
import disBook from '../../assets/images/discountBanner/disBook.png';


function DiscountBanner() {
  return (
    <>
      <div className="discount-baner">
        <div className="discount-banner-container">
          <div className="discount-info">
            <h3 className="discount-condition h3 color-2">
              Зареєструйся та отримай знижку на перше замовлення!
            </h3>
            <p className="discount-percent color-4 ">10%</p>
            <button className="discount-registration color-1 bg-color-5 ">
              Зареєструватися
            </button>
          </div>
          <div className="discount-book">
            <img src={disBook} alt="Books" />
          </div>
        </div>
      </div>
    </>
  );
}

export default DiscountBanner
