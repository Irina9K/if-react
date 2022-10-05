import React from 'react';

import SelectItem from './SelectItem';
import '../assets/css/TopSection.css';

const WhatIsTheAge = ({ showQuestion, numberChildren }) => {
  function createSelect() {
    const old = [];
    for (let i = 1; i <= 17; i += 1) {
      old.push(i);
    }
    return old;
  }

  const arrOld = createSelect();

  function arrPushForSelect() {
    const arr = [];
    for (let i = 1; i <= numberChildren; i += 1) {
      if (showQuestion) {
        arr.push(i);
      }
    }
    return arr;
  }

  const arrPush = arrPushForSelect();

  return (
    <div className={showQuestion ? 'wrapper__children--infBlock' : 'wrapper__children--infNone'}>
      <div className="filter__age">What is the age of the child you’re travelling with?</div>
      <div className="wrapper__select">
        {arrPush.map((item, index) => (
          <SelectItem key={index} arrOld={arrOld}>
            item
          </SelectItem>
        ))}
      </div>
    </div>
  );
};

export default WhatIsTheAge;
