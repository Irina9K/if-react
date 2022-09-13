import React, { useState } from 'react';
import WhatIsTheAge from './WhatIsTheAge';

const FilterContainer = ({ filterStatus, showFilter }) => {
  const [showQuestion, setShowQuestion] = useState(false);
  const [numberAdults, setNumberAdults] = useState(0);
  const [numberChildren, setNumberChildren] = useState(0);
  const [numberRooms, setNumberRooms] = useState(0);

  return (
    <>
      <div onClick={(e) => showFilter(e)} className="add__input add__first">{numberAdults} Adults</div>
      <div onClick={(e) => showFilter(e)} className="add__input add__second">{numberChildren} Children</div>
      <div onClick={(e) => showFilter(e)} className="add__input add__third">{numberRooms} Rooms</div>
      <input
        onClick={(e) => showFilter(e)}
        className="input__group--input header__choice--people"
        type="text"
        id="people-room"
        name="people-room"
        autoComplete="off"
      />
      <label className="input__group--label label__people" htmlFor="people-room">
        {' '}
      </label>
      <div
        className={filterStatus ? 'container__forms--filterBlock' : 'container__forms--filterNone'}
      >
        <FilterItem
          value={'Adults'}
          setNumberAdults={setNumberAdults}
          numberAdults={numberAdults}
        />
        <FilterItem
          value={'Children'}
          setShowQuestion={setShowQuestion}
          setNumberChildren={setNumberChildren}
          numberChildren={numberChildren}
        />
        <FilterItem value={'Rooms'} setNumberRooms={setNumberRooms} numberRooms={numberRooms} />
        <WhatIsTheAge showQuestion={showQuestion} numberChildren={numberChildren} />
      </div>
    </>
  );
};

const FilterItem = ({
  value,
  setShowQuestion,
  setNumberAdults,
  numberAdults,
  setNumberChildren,
  numberChildren,
  setNumberRooms,
  numberRooms,
}) => {
  const [count, setCount] = useState(0);

  function increment() {
    if (
      (value === 'Adults' && count === 30) ||
      (value === 'Children' && count === 10) ||
      (value === 'Rooms' && count === 30)
    ) {
      return;
    }

    setCount(count + 1);

    if (value === 'Adults') {
      setNumberAdults(numberAdults + 1);
    }

    if (value === 'Children') {
      setNumberChildren(numberChildren + 1);
    }

    if (value === 'Rooms') {
      setNumberRooms(numberRooms + 1);
    }
  }

  function decrement() {
    if (count === 0) {
      return;
    }

    setCount(count - 1);

    if (value === 'Adults') {
      setNumberAdults(numberAdults - 1);
    }

    if (value === 'Children') {
      setNumberChildren(numberChildren - 1);
    }

    if (value === 'Rooms') {
      setNumberRooms(numberRooms - 1);
    }
  }

  return (
    <>
      <div className="filter__item">
        <p className="filter__name">{value}</p>
        <p className={count === 0 ? 'btn__filter--minus' : 'btn__filter--plus'} onClick={decrement}>
          -
        </p>
        <p className="filter__counter first__count">{count}</p>
        <p
          className={
            count === 30 || (count === 10 && value === 'Children') ?
              'btn__filter--minus'
              : 'btn__filter--plus'
          }
          onClick={increment}
        >
          +
        </p>
        {value === 'Children' && count > 0 && setShowQuestion(true)}
        {value === 'Children' && count === 0 && setShowQuestion(false)}
      </div>
    </>
  );
};

export default FilterContainer;
