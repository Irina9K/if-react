import React from 'react';

function AvailableItem({ city, country, name, imageUrl, inputValue }) {
  return (
    <>
      <figure
        className={inputValue.length > 0 ? 'main__free--elementBlock' : 'main__free--elementNone'}
      >
        <img
          src={imageUrl}
          alt={name}
          style={{
            height: `${296}px`,
            width: `${296}px`,
          }}
        />
        <figcaption className="main__name--img">
          <a className="nav__link--country">{name}</a>
          <a className="main__name--country">
            {city}
            <br />
            {country}
          </a>
        </figcaption>
      </figure>
    </>
  );
}

export default AvailableItem;
