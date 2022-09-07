import React, { useCallback, useState } from 'react';
import '../assets/css/TopSection.css';
import '../assets/css/SectionAvailables.css';
import background from '../assets/img/castell.png';
import IconsSVG from '../assets/img/sprite.svg';
import app from '../assets/img/app_store.png';
import google from '../assets/img/google_play.png';
import AvailableItem from './details/AvailableItem';
import { API_URL, PATH_FOR_SEARCH_HOTELS } from '../constans/api';
import SectionHeaderTop from './SectionHeaderTop';

function TopSection() {
  const [arrSearchPlace, setArrSearchPlace] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isBtnActive, setIsBtnActive] = useState(false);

  const handleClick = useCallback(() => {
    fetch(`${API_URL}/${PATH_FOR_SEARCH_HOTELS}=${inputValue}`)
      .then((response) => response.json())
      .then((result) => {
        setArrSearchPlace(result);
      });
  }, [inputValue]);

  function showAvailablePlace(e) {
    // e.preventDefault();
    setIsBtnActive(true);
    setInputValue(e.target.value);
    console.log(inputValue);
    console.log(arrSearchPlace);
  }
  return (
    <>
      <header
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="container header__container">
          <SectionHeaderTop />
          <section className="section section__header--foundation">
            <h1 className="header__name">
              Discover stays
              <br />
              to live, work or just relax
            </h1>
            <form className="input__group">
              <div className="container__forms--first">
                <input
                  value={inputValue}
                  onChange={(e) => showAvailablePlace(e)}
                  id="searchPlace"
                  className="input__group--input header__choice--city"
                  type="search"
                  name="city"
                  required
                />
                <label className="input__group--label label__city" htmlFor="city">
                  Your destination or hotel name
                </label>
                <div className="form__icon--lens">
                  <svg className="icon__lens">
                    <use xlinkHref={`${IconsSVG}#lens`} />
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
                <button onClick={handleClick} className="btn header__button" type="reset">
                  Search
                </button>
              </div>
            </form>
            <div className="header__app">
              <a href="#" className="header__app--link">
                <img src={app} alt="google_play" />
              </a>
              <a href="#" className="header__app--link">
                <img src={google} alt="app_store" />
              </a>
            </div>
          </section>
        </div>
      </header>
      <div
        className={`container ${
          isBtnActive ? 'main__container--freeBlock' : 'main__container--freeNone'
        }`}
      >
        <section className="main__free">
          <div className="row__free">
            <div className="main__title title_free">
              <h2>Available hotels</h2>
            </div>
            <div
              className={
                inputValue.length === 0 ? 'main__free--hotelNone' : 'main__free--hotelBlock'
              }
            >
              {arrSearchPlace.map((place) => (
                <AvailableItem
                  key={place.id}
                  city={place.city}
                  name={place.name}
                  country={place.country}
                  imageUrl={place.imageUrl}
                />
              ))}
            </div>
            <div className={inputValue.length === 0 ? 'free__errorBlock ' : 'free__errorNone '}>
              <p className="error__text">Please enter destination or hotel name</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default TopSection;
