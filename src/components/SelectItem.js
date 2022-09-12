import React from 'react';

const SelectItem = ({ arrOld }) => (
    <select>
      {arrOld.map((age, index) => (
        <option key={index}>{age} years old</option>
      ))}
    </select>
);

export default SelectItem;
