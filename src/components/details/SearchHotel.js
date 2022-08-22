import React from 'react';

const SearchHotel = () => (

    <div className="container__forms--first">
      <input
        className="input__group--input header__choice--city"
        type="search"
        id="city"
        name="city"
        required
      />
      <label className="input__group--label label__city" htmlFor="city">
        Your destination or hotel name
      </label>
      <div className="form__icon--lens">
        <svg className="icon__lens">
          {/* <use xlinkHref="./images/sprite/sprite.svg#lens"></use> */}
        </svg>
      </div>
    </div>

);

function f1() {
  console.log('Hello world');
}

export default SearchHotel;
export { f1 };
