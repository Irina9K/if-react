import React from 'react';
import { f1 } from './SearchHotel';

const Button = () => (
  <div className="container__forms--button">
    <button onClick={f1} className="btn header__button" type="reset">
      Search
    </button>
  </div>
);

export default Button;
