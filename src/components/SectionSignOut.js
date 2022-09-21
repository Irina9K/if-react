import React from 'react';
import IconsSVG from '../assets/img/sprite.svg';
import '../assets/css/SectionSignOut.css';

const SectionSignOut = () => (
    <div className="container__signoutBlock">
      <svg className="icon__vector">
        <use xlinkHref={`${IconsSVG}#vector`} />
      </svg>
      <p className="text__signout">Sign out</p>
    </div>
);

export default SectionSignOut;
