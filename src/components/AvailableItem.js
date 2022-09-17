import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HotelDetails from './HotelDetails';

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
      <Routes>
        <Route
          path={`/hotels/${hotelId}`}
          element={<HotelDetails hotelId={hotelId} />}
        />
      </Routes>
    </>
  );
}

export default AvailableItem;
