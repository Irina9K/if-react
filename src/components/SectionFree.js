import React from 'react';
import { useSelector } from 'react-redux';

import AvailableItem from './AvailableItem';

const SectionFree = ({ hotels, inputValue }) => {
  const conditionReducer = useSelector((state) => state.isLogin);

  return (
    <section className={conditionReducer ? 'main__freeBlock' : 'main__freeNone'}>
      <div className="row__free">
        <div className="main__title title_free">
          <h2>Available hotels</h2>
        </div>
        <div
          className={
            inputValue.length === 0 || hotels.length === 31 ?
              'main__free--hotelNone'
              : 'main__free--hotelBlock'
          }
        >
          {hotels.map((place) => (
            <AvailableItem
              key={place.id}
              hotelId={place.id}
              city={place.city}
              name={place.name}
              country={place.country}
              imageUrl={place.imageUrl}
            />
          ))}
        </div>
        <div className={inputValue.length === 0 ? 'free__errorBlock ' : 'free__errorNone '}>
          <p className="error__text">Please enter destination or hotel name</p>
        </div>
      </div>
    </section>
  );
};

export default SectionFree;
