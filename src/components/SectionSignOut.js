import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import IconsSVG from '../assets/img/sprite.svg';
import '../assets/css/SectionSignOut.css';
import allActions from '../store/actions';

const SectionSignOut = ({ isLogout, setIsLogout }) => {
  const dispatch = useDispatch();

  function logOut() {
    dispatch(allActions.logOutAction());
    setIsLogout(false);
  }

  return (
    <Link to={'/'}>
      <button
        onClick={logOut}
        className={`btn ${isLogout ? 'container__signoutBlock' : 'container__signoutNone'}`}
      >
        <svg className="icon__vector">
          <use xlinkHref={`${IconsSVG}#vector`} />
        </svg>
        <p className="text__signout">Sign out</p>
      </button>
    </Link>
  );
};

export default SectionSignOut;
