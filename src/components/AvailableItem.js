import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HotelDetails from './HotelDetails';

function AvailableItem({ city, country, name, imageUrl, keyId }) {
  return (
    <>
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
      <Routes>
        <Route
          path={`/hotels/${keyId}`}
          element={
            <HotelDetails
              city={city}
              country={country}
              name={name}
              imageUrl={imageUrl}
              keyId={keyId}
            />
          }
        />
      </Routes>
    </>
  );
}

export default AvailableItem;
