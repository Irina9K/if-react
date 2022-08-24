import React from 'react';
import '../assets/css/TopSection.css';
import background from '../assets/img/castell.png';
import SearchHotel from './details/SearchHotel';
import IconsSVG from '../assets/img/sprite.svg';
import Calendar from './details/Сalendar';
import Filter from './details/Filter';
import Button from './details/Button';

const TopSection = () => (
  <div>
    <header
      style={{
        backgroundImage: `url(${background})`,
      }}
      className="header"
    >
      <div className="container header__container">
        <div className="section section__header--top">
          <div className="header__logo">
            <a href="#">
              <svg className="logo__vector">
                <use xlinkHref={`${IconsSVG}#logo_vector`} />
              </svg>
            </a>
          </div>

          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a className="nav__link" href="#">
                  Stays
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="#">
                  Attractions
                </a>
              </li>
            </ul>
          </nav>

          <div className="header__icon">
            <div className="header__icon--light">
              <button className="btn header__button--light">
                <svg className="icon__night">
                  <use xlinkHref={`${IconsSVG}#night`} />
                </svg>
              </button>
            </div>
            <div className="header__icon--account">
              <svg className="icon__account">
                <use xlinkHref={`${IconsSVG}#account_circle`} />
              </svg>
            </div>

            <div className="burger__menu">
              <svg className="icon__menu">
                <use xlinkHref={`${IconsSVG}#menu`} />
              </svg>
            </div>
          </div>
        </div>

        <section className="section section__header--foundation">
          <h1 className="header__name">
            Discover stays
            <br />
            to live, work or just relax
          </h1>
          <form className="input__group">
            <SearchHotel />
            <Calendar />
            <Filter />
            <Button />
          </form>
          <div className="header__app">
            <a href="#" className="header__app--link">
              <img src="../assets/img/google_play.png" alt="google_play" />
            </a>
            <a href="#" className="header__app--link">
              <img src="../assets/img/app_store.png" alt="app_store" />
            </a>
          </div>
        </section>
      </div>
    </header>
  </div>
);

export default TopSection;
