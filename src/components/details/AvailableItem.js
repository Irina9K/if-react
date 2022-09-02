import React from 'react';

function AvailableItem({ city, country, name, imageUrl }) {
  return (
    <div>
      <figure className="main__free--element">
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
    </div>
  );
}

export default AvailableItem;
