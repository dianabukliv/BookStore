import React, {useState} from 'react';
import './Header.css';

import favorite_border from '../../assets/icons/favorite_border.png';
import shopping_cart from '../../assets/icons/shopping_cart.png';
import user from '../../assets/icons/user.png';
import close_bold from '../../assets/icons/close-bold.png';
import burger from '../../assets/icons/burger.png';
import local_shipping from '../../assets/icons/local_shipping.png';
import settings_phone from '../../assets/icons/settings_phone.png';
import logo from '../../assets/icons/logo.png';
import close_bold_red from '../../assets/icons/close-bold-red.png';
import search from '../../assets/icons/search.png';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [searchText, setSearchText] = useState("");

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const headerButtons = [
      { icon: <img src={favorite_border}></img>, label: "Бажане" },
      { icon: <img src={shopping_cart}></img>, label: "Корзина", className: "cart-button" },
      { icon: <img src={user}></img>, label: "Увійти" }
    ];

    const typeChooseButtons = [
      { label: "Усі" },
      { label: "Паперові книги" },
      { label: "Аудіокниги" },
      { label: "Улектронні книги" }
    ];

    const handleClear = () => {
      setSearchText("");
    };

    return (
        <div className='header'>
            <div className="top-header">
                <div className="header-content">
                    <div className="burger-menu">
                        <div className="burger-icon" onClick={toggleMenu}>
                            {isOpen ? <img src={close_bold}></img> : <img src={burger}></img>}
                        </div>
                        {isOpen && (
                            <div className="menu-content">
                            <a href="#!" className="menu-item">Меню</a>
                            <a href="#!" className="menu-item">Меню</a>
                            <a href="#!" className="menu-item">Меню</a>
                            <a href="#!" className="menu-item">Меню</a>
                            <a href="#!" className="menu-item">Меню</a>
                            </div>
                        )}
                    </div>

                    <div className="delivery-title">
                        <span><img src={local_shipping}></img></span> <p class="text2">Безкоштовна доставка для замовлення від 500 грн!</p>
                    </div>

                    <div className="contact-title">
                        <div className="phone-title">
                            <span><img src={settings_phone}></img></span> <div class="text2">0-800-333-563</div>
                        </div>
                        <p class="text5-regular">Без вихідних, з 9:00 до 20:00</p>
                    </div>
                </div>
            </div>

            <div className="main-header">
                <div className="main-header-content">
                    <a><img src={logo}></img></a> 
                    <div className={`overlay ${isFocused ? 'active' : ''}`} />
                    <div className="search-wrapper">
                        <input
                        placeholder="Пошук"
                        className="search-input text5-medium"
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        />
                        {searchText && (
                            <div className="clear-icon">
                                <img src={close_bold_red} alt="search icon"  onClick={handleClear}/><p>|</p>
                            </div>
                        )}
                        <span className="search-icon">
                        <img src={search} alt="search icon" />
                        </span>
                    </div>
                    <div className="user-pannel-buttons">
                        {headerButtons.map((button, index) => (
                            <button key={index} className={`header-button ${button.className || ""}`}>
                                {button.icon}
                                <span class="text3">{button.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="main-header-choose">
                <div className="choose-type-buttons">
                    {typeChooseButtons.map((button, index) => (
                        <button key={index} className="type-choose-button">
                            <p class="text4">{button.label}</p>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Header;