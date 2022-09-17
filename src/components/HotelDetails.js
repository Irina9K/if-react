import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { API_URL, PATH_FOR_ROUTER } from '../constans/api';

const HotelDetails = ({ hotelId }) => {
  const [arrHotelDetails, setArrHotelDetails] = useState([]);
  const param = useParams();

  useEffect(() => {
    fetch(`${API_URL}/${PATH_FOR_ROUTER}/${param.hotelId}`)
      .then((response) => response.json())
      .then((result) => {
        setArrHotelDetails(result);
      });
  }, [hotelId]);

  return (
    <figure className="main__free--elementBlock">
      <img
        src={arrHotelDetails.imageUrl}
        alt={arrHotelDetails.name}
        style={{
          height: `${596}px`,
          width: `${596}px`,
        }}
      />
      <figcaption className="main__name--imgRouter">
        <Link to={`/hotels/${hotelId}`} className="nav__link--country">
          {arrHotelDetails.name}
        </Link>
        <br />
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
