import React from 'react';

function AvailableItem(data) {
  return (
    <div>
      <figure className="main__free--element">
        <img src={data.place.imageUrl} />
        <figcaption className="main__name--img">
          <a className="nav__link--country">{data.place.name}</a>
          <a className="main__name--country">
            {data.place.city}
            {data.place.country}
          </a>
        </figcaption>
      </figure>
    </div>
  );
}

export default AvailableItem;
