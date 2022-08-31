import React from 'react';

function AvailableItem({ city, country, name, imageUrl }) {
  return (
    <div>
      <figure className="main__free--element">
        <img src={imageUrl} />
        <figcaption className="main__name--img">
          <a className="nav__link--country">{name}</a>
          <a className="main__name--country">
            {city}<br/>
            {country}
          </a>
        </figcaption>
      </figure>
    </div>
  );
}

export default AvailableItem;
