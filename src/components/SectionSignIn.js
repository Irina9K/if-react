import React, { useState } from 'react';
import '../assets/css/SectionSignIn.css';
import '../assets/css/TopSection.css';
import { users } from '../constans/constans';

const SectionSignIn = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  function clickLogin() {
    if (email && password) {
      users.forEach((item) => {
        if (item.email === email && item.password === password) {
          setIsLogin(false);
        }
      });
    }
  }

  function checkEmail(e) {
    e.preventDefault();
    setEmail(e.target.value);
  }

  function checkPassword(e) {
    e.preventDefault();
    setPassword(e.target.value);
  }

  return (
    <>
      {' '}
      <div className={isLogin ? 'container__sign--inBlock ' : 'container__sign--inNone '}>
        <div className="title__sign">Sign in</div>
        <div className="wrapper__input--value">
          <label className="label__email" htmlFor="email">
            Email address
          </label>
          <input
            onChange={(e) => checkEmail(e)}
            className="input__email"
            name="email"
            placeholder="Your email"
            id="email"
            type="email"
          ></input>
          <label className="label__password">Password</label>
          <input onChange={(e) => checkPassword(e)} className="input__password"></input>
          <button onClick={clickLogin} className="btn btn__sign--in">
            Sign in
          </button>
        </div>
      </div>
    </>
  );
};

export default SectionSignIn;
