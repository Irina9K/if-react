import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import { fetchHotels } from '../store/reducerHotels';

import SectionFree from './SectionFree';
import FilterContainer from './FilterItem';
import background from '../assets/img/castell.png';
import IconsSVG from '../assets/img/sprite.svg';
import app from '../assets/img/app_store.png';
import google from '../assets/img/google_play.png';
import '../assets/css/TopSection.css';
import '../assets/css/Availables.css';

import 'react-datepicker/dist/react-datepicker.css';

function Form() {
  const [arrSearchPlace] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isBtnActive] = useState(false);
  const [filterStatus, setFilterStatus] = useState(false);
  const [dateIn, setDateIn] = useState(null);
  const [dateOut, setDateOut] = useState(null);
  const [numberAdults, setNumberAdults] = useState(0);
  const [numberChildren, setNumberChildren] = useState(0);
  const [numberRooms, setNumberRooms] = useState(0);
  const conditionReducer = useSelector((state) => state.reducer.isLogin);

  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.hotelReducer.hotels);

  // const handleClick = useCallback(async () => {
  //   fetch(`${API_URL}/${PATH_FOR_SEARCH_HOTELS}=${inputValue}`)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setArrSearchPlace(result);
  //     });
  //   setIsBtnActive(true);
  //   setFilterStatus(false);
  // }, [inputValue]);

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
      <div>
        {/* <button */}
        {/*  onClick={() => */}
        {/*    dispatch( */}
        {/*      fetchHotels(inputValue, dateIn, dateOut, numberAdults, numberChildren, numberRooms), */}
        {/*    ) */}
        {/*  } */}
        {/* > */}
        {/*  get hotels */}
        {/* </button> */}
        <div>
          {hotels.map((hotel, i) => (
            <div key={i}>{hotel.name}</div>
          ))}
        </div>
      </div>

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
                <FilterContainer
                  filterStatus={filterStatus}
                  showFilter={showFilter}
                  numberAdults={numberAdults}
                  setNumberAdults={setNumberAdults}
                  numberChildren={numberChildren}
                  setNumberChildren={setNumberChildren}
                  numberRooms={numberRooms}
                  setNumberRooms={setNumberRooms}
                />
              </div>
              <div className="container__forms--button">
                <button
                  onClick={() => dispatch(
                    // setIsBtnActive(!isBtnActive),
                    // setFilterStatus(!filterStatus),
                    fetchHotels(
                      inputValue,
                      dateIn,
                      dateOut,
                      numberAdults,
                      numberChildren,
                      numberRooms,
                    ),
                  )
                  }
                  className="btn header__button"
                  type="reset"
                >
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
