import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import IconsSVG from '../assets/img/sprite.svg';
import '../assets/css/SectionSignOut.css';
import { logOutAction } from '../store/actions';

const SectionSignOut = ({ showButtonOut, setShowButtonOut }) => {
  const dispatch = useDispatch();

  function logOut() {
    dispatch(logOutAction());
    setShowButtonOut(false);
  }

  return (
    <Link to={'/'}>
      <button
        onClick={logOut}
        className={`btn ${showButtonOut ? 'container__signoutBlock' : 'container__signoutNone'}`}
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
