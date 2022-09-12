import React, { useState } from 'react';
import WhatIsTheAge from './WhatIsTheAge';

const FilterContainer = ({ filterStatus }) => {
  const [showQuestion, setShowQuestion] = useState(false);

  return (
    <div
      className={filterStatus ? 'container__forms--filterBlock' : 'container__forms--filterNone'}
    >
      <FilterItem value={'Adults'} />
      <FilterItem
        value={'Children'}
        showQuestion={showQuestion}
        setShowQuestion={setShowQuestion}
      />
      <FilterItem value={'Rooms'} />
      <WhatIsTheAge showQuestion={showQuestion} />
    </div>
  );
};

const FilterItem = ({ value, showQuestion, setShowQuestion }) => {
  const [count, setCount] = useState(0);
  console.log(showQuestion);
  function increment() {
    if (value === 'Adults' && count === 30) {
      return;
    }

    if (value === 'Children' && count === 10) {
      return;
    }

    if (value === 'Rooms' && count === 30) {
      return;
    }

    setCount(count + 1);
  }

  function decrement() {
    if (count === 0) {
      return;
    }

    setCount(count - 1);
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
