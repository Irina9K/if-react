import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_URL, PATH_FOR_ROUTER } from '../constans/api';

const HotelDetails = ({ /* city, country, name, imageUrl, */ keyId }) => {
  const [arrHotelDetails, setArrHotelDetails] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/${PATH_FOR_ROUTER}/${keyId}`)
      .then((response) => response.json())
      .then((result) => {
        setArrHotelDetails(result);
        console.log(arrHotelDetails);
      });
  }, [keyId]);
  return (
    <figure className="main__free--element">
      <img
        src={arrHotelDetails.imageUrl}
        alt={arrHotelDetails.name}
        style={{
          height: `${596}px`,
          width: `${596}px`,
        }}
      />
      <figcaption className="main__name--imgRouter">
        <Link to={`/hotels/${keyId}`} className="nav__link--country">
          {arrHotelDetails.name}
        </Link>
<br/>
        <a className="main__name--country">
          {arrHotelDetails.city}
          <br />
          {arrHotelDetails.country}
        </a>
      </figcaption>
    </figure>
  );
};

export default HotelDetails;
