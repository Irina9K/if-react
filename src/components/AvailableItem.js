import React from 'react';
import { Link } from 'react-router-dom';

function AvailableItem({ city, country, name, imageUrl, hotelId }) {
  return (
    <>
      <figure className="main__free--elementBlock">
        <img
          src={imageUrl}
          alt={name}
          style={{
            height: `${296}px`,
            width: `${296}px`,
          }}
        />
        <figcaption className="main__name--img">
          <Link to={`/hotels/${hotelId}`} className="nav__link--country">
            {name}
          </Link>

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
