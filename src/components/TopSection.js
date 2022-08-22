import React from 'react';
import '../assets/css/TopSection.css';
import background from '../assets/img/castell.png';

const TopSection = () => (
  <div>
    <header style={{
      backgroundImage: `url(${background})`,
    }} className="header">
      <div className="container header__container">
        <div className="section section__header--top">
          <div className="header__logo">
            <a href="#">
              {/* <svg className="logo__vector">/!*<use xlinkHref={logo}></use>*!/</svg> */}
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
                   {/* <use xlinkHref="./images/sprite/sprite.svg#night"></use> */}
                </svg>
              </button>
            </div>
            <div className="header__icon--account">
              <svg className="icon__account">
                {/* <use xlinkHref="./images/sprite/sprite.svg#account_circle"></use> */}
              </svg>
            </div>

            <div className="burger__menu">
              <svg className="icon__menu">
                {/* <use xlinkHref="./images/sprite/sprite.svg#menu"></use> */}
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
            <div className="container__forms--first">
              <input
                className="input__group--input header__choice--city"
                type="search"
                id="city"
                name="city"
                required
              />
              <label className="input__group--label label__city" htmlFor="city">
                Your destination or hotel name
              </label>
              <div className="form__icon--lens">
                <svg className="icon__lens">
                  {/* <use xlinkHref="./images/sprite/sprite.svg#lens"></use> */}
                </svg>
              </div>
            </div>

            <div className="container__forms--second">
              <div className="forms__check--in">
                <input
                  className="input__group--input header__choice--data"
                  onFocus="(this.type='date')"
                  onBlur="(this.type='text')"
                  type="text"
                  id="datain"
                  name="data"
                />
                <label className="input__group--label label__data" htmlFor="datain">
                  Check-in <span>date</span>
                </label>
              </div>

              <div className="forms__check--out">
                <input
                  className="input__group--input header__choice--data"
                  onFocus="(this.type='date')"
                  onBlur="(this.type='text')"
                  type="text"
                  id="dataout"
                  name="data"
                />
                <label className="input__group--label label__data" htmlFor="dataout">
                  Check-out <span>date</span>
                </label>
              </div>
            </div>

            <div className="container__forms--third">
              <div className="add__input add__first"></div>
              <div className="add__input add__second"></div>
              <div className="add__input add__third"></div>
              <input
                className="input__group--input header__choice--people"
                type="text"
                id="people-room"
                name="people-room"
                autoComplete="off"
              />
              <label className="input__group--label label__people" htmlFor="people-room">
                {' '}
              </label>
              <div className="container__forms--filter">
                <div className="filter__item">
                  <p className="filter__name">Adults</p>
                  <p className="btn__filter--minus">-</p>
                  <p className="filter__counter first__count">0</p>
                  <p className="btn__filter--plus thirty__adults">+</p>
                </div>
                <div className="filter__item">
                  <p className="filter__name">Children</p>
                  <p className="btn__filter--minus">-</p>
                  <p className="filter__counter second__count" id="hidden__counter">
                    0
                  </p>
                  <p className="btn__filter--plus fifteen" id="addInf">
                    +
                  </p>
                </div>
                <div className="filter__item">
                  <p className="filter__name">Rooms</p>
                  <p className="btn__filter--minus">-</p>
                  <p className="filter__counter third__count">0</p>
                  <p className="btn__filter--plus thirty__rooms">+</p>
                </div>
                <div className="wrapper__children--inf">
                  <div className="filter__age">
                    What is the age of the child you’re travelling with?
                  </div>
                  <div className="wrapper__select"></div>
                </div>
              </div>
            </div>

            <div className="container__forms--button">
              <button className="btn header__button" type="reset">
                Search
              </button>
            </div>
          </form>

          <div className="header__app">
            <a href="#" className="header__app--link">
              {/* <img src="./images/png/google_play.png" alt="google_play" /> */}
            </a>
            <a href="#" className="header__app--link">
              {/* <img src="./images/png/app_store.png" alt="app_store" /> */}
            </a>
          </div>
        </section>
      </div>
    </header>
  </div>
);

export default TopSection;
