import React, { useState } from 'react';

const FilterItem = ({ value }) => {
  const [count, setCount] = useState(0);

  function increment() {
    if (value === 'Adults' && count === 30) {
      return;
    }

    // if (value === 'Children' && count > 0) {
    // }

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
      </div>
    </>
  );
};

export default FilterItem;
