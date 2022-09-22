import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import IconsSVG from '../assets/img/sprite.svg';
import '../assets/css/SectionSignOut.css';
import { AuthContext } from '../context/context';

const SectionSignOut = ({ isLogout, setIsLogout }) => {
  const { setIsAuth } = useContext(AuthContext);

  function logOut() {
    setIsAuth(false);
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
