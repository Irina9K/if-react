import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import IconsSVG from '../assets/img/sprite.svg';
import '../assets/css/TopSection.css';
import SectionSignIn from './SectionSignIn';
import SectionSignOut from './SectionSignOut';

const SectionHeaderTop = () => {
  const [showButtonOut, setShowButtonOut] = useState(false);
  const logReducer = useSelector((state) => state.value);

  function showLogOut() {
    // eslint-disable-next-line no-unused-expressions
    logReducer && setShowButtonOut(true);
    console.log('ui');
  }

  return (
    <div className="section section__header--top">
      <div className="header__logo">
        <Link to={'/'}>
          <svg className="logo__vector">
            <use xlinkHref={`${IconsSVG}#logo_vector`} />
          </svg>
        </Link>
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
        <div onClick={showLogOut} className="header__icon--account">
          <svg className={logReducer ? 'icon__account' : 'icon__accountLight'}>
            <use xlinkHref={`${IconsSVG}#account_circle`} />
          </svg>
        </div>

        <div className="burger__menu">
          <svg className="icon__menu">
            <use xlinkHref={`${IconsSVG}#menu`} />
          </svg>
        </div>
        <SectionSignIn />
        <SectionSignOut
            showButtonOut={showButtonOut} setShowButtonOut={setShowButtonOut}
        />
      </div>
    </div>
  );
};

export default SectionHeaderTop;
