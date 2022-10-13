import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';

import SectionFree from './SectionFree';
import FilterContainer from './FilterItem';
// import {fetchHotels} from "../store/hotelsActions";
import { API_URL, PATH_FOR_SEARCH_HOTELS } from '../constants/api.constants';
import background from '../assets/img/castell.png';
import IconsSVG from '../assets/img/sprite.svg';
import app from '../assets/img/app_store.png';
import google from '../assets/img/google_play.png';
import '../assets/css/TopSection.css';
import '../assets/css/Availables.css';

import 'react-datepicker/dist/react-datepicker.css';

function Form() {
  const [arrSearchPlace, setArrSearchPlace] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isBtnActive, setIsBtnActive] = useState(false);
  const [filterStatus, setFilterStatus] = useState(false);
  const [dateIn, setDateIn] = useState(null);
  const [dateOut, setDateOut] = useState(null);
  const conditionReducer = useSelector((state) => state.isLogin);

  console.log(dateIn);

  const handleClick = useCallback(async () => {
    fetch(`${API_URL}/${PATH_FOR_SEARCH_HOTELS}=${inputValue}`)
      .then((response) => response.json())
      .then((result) => {
        setArrSearchPlace(result);
      });
    setIsBtnActive(true);
    setFilterStatus(false);
  }, [inputValue]);

  function showAvailablePlace(e) {
    e.preventDefault();
    setInputValue(e.target.value);
  }

  function showFilter(e) {
    e.preventDefault();
    setFilterStatus(true);
  }

  return (
    <>
      <header
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="container header__container">
          <section
            className={`section ${
              conditionReducer ?
                'section__header--foundationBlock'
                : 'section__header--foundationNone'
            }`}
          >
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
                  <DatePicker
                    className="input__group--input header__choice--data"
                    selected={dateIn}
                    onChange={(date) => setDateIn(date)}
                    dateFormat="dd.MM.yy"
                  />
                  <label className="input__group--label label__data" htmlFor="datain">
                    Check-in <span>date</span>
                  </label>
                </div>

                <div className="forms__check--out">
                  <DatePicker
                    className="input__group--input header__choice--data"
                    selected={dateOut}
                    onChange={(date) => setDateOut(date)}
                    dateFormat="dd.MM.yy"
                  />
                  <label className="input__group--label label__data" htmlFor="dataout">
                    Check-out <span>date</span>
                  </label>
                </div>
              </div>
              <div className="container__forms--third">
                <FilterContainer filterStatus={filterStatus} showFilter={showFilter} />
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
        <SectionFree hotels={arrSearchPlace} inputValue={inputValue} />
      </div>
    </>
  );
}

export default Form;
