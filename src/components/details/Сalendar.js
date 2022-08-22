import React from 'react';

const Сalendar = () => (
    <div className="container__forms--second">
      <div className="forms__check--in">
        <input
          className="input__group--input header__choice--data"
          onFocus="(this.type='date')"
          onBlur="(this.type='text')"
          type="text"
          id="datain"
          name="data"
        />
        <label className="input__group--label label__data" htmlFor="datain">
          Check-in <span>date</span>
        </label>
      </div>

      <div className="forms__check--out">
        <input
          className="input__group--input header__choice--data"
          onFocus="(this.type='date')"
          onBlur="(this.type='text')"
          type="text"
          id="dataout"
          name="data"
        />
        <label className="input__group--label label__data" htmlFor="dataout">
          Check-out <span>date</span>
        </label>
      </div>
    </div>
);

export default Сalendar;
