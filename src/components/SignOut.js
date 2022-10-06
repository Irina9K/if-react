import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { logOutAction } from '../store/actions';
import IconsSVG from '../assets/img/sprite.svg';
import '../assets/css/SignOut.css';

const SignOut = ({ showButtonOut, setShowButtonOut }) => {
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

export default SignOut;
