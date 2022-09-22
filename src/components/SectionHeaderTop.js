import React, { useContext, useState } from 'react';
import IconsSVG from '../assets/img/sprite.svg';
import '../assets/css/TopSection.css';
import SectionSignIn from './SectionSignIn';
import SectionSignOut from './SectionSignOut';

import { AuthContext } from '../context/context';

const SectionHeaderTop = () => {
  const { isAuth } = useContext(AuthContext);
  const [isLogout, setIsLogout] = useState(false);

  function showLogOut() {
    // eslint-disable-next-line no-unused-expressions
    isAuth && setIsLogout(true);
  }

  return (
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
        <div onClick={showLogOut} className="header__icon--account">
          <svg className="icon__account">
            <use xlinkHref={`${IconsSVG}#account_circle`} />
          </svg>
        </div>

        <div className="burger__menu">
          <svg className="icon__menu">
            <use xlinkHref={`${IconsSVG}#menu`} />
          </svg>
        </div>
        <SectionSignIn />
        <SectionSignOut isLogout={isLogout} setIsLogout={setIsLogout} />
      </div>
    </div>
  );
};

export default SectionHeaderTop;
