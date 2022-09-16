import React from 'react';
import { Link } from 'react-router-dom';

const HotelDetails = ({ city, country, name, imageUrl, keyId }) => (
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
        <Link to={`/hotels/${keyId}`} className="nav__link--country">
          {name}
        </Link>

        <a className="main__name--country">
          {city}
          <br />
          {country}
        </a>
      </figcaption>
    </figure>
);
export default HotelDetails;
