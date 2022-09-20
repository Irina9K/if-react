import React from 'react';
import '../assets/css/SectionSignIn.css';
import '../assets/css/TopSection.css';

const SectionSignIn = () => (
  <div className="container__sign--in">
    <div className="title__sign">Sign in</div>
    <div className="wrapper__input--value">
      <label className="label__email">Email address</label>
      <input className="input__email"></input>
      <label className="label__password">Password</label>
      <input className="input__password"></input>
      <button className="btn btn__sign--in">Sign in</button>
    </div>
  </div>
);

export default SectionSignIn;
