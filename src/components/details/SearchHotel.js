import React from 'react';
import IconsSVG from '../../assets/img/sprite.svg';

const data = [
  {
    id: '71ce9eac-e9b9-44f0-a342-9ff0b565f3b7',
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
  },
  {
    id: 'aa560608-a879-48a7-80b6-deff2806b250',
    name: 'Apartment Sunshine',
    city: 'Santa  Cruz de Tenerife',
    country: 'Spain',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
  },
  {
    id: '1d88fefe-edf1-4cda-844a-babbf29bb2b3',
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
  },
  {
    id: 'a2bf824d-edd8-41f0-8b70-244334086ab4',
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
  },
  {
    id: '4024535d-a498-4274-b7cb-f01ada962971',
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
  },
  {
    id: 'e51e71f6-6baf-4493-b3ae-25dc27cdc238',
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
  },
  {
    id: '87d2b966-2431-43f3-8c0d-2c8723474dfc',
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
  },
  {
    id: '190221c6-b18f-4dba-97de-e35f0e14c023',
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
  },
];

function SearchHotel() {
  return (
    <>
      <div className="container__forms--first">
        <input
          id="searchPlace"
          className="input__group--input header__choice--city"
          type="search"
          name="city"
          required
        />
        <label className="input__group--label label__city" htmlFor="city">
          Your destination or hotel name
        </label>
        <div className="form__icon--lens">
          <svg className="icon__lens">
            <use xlinkHref={`${IconsSVG}#lens`} />
          </svg>
        </div>
      </div>
    </>
  );
}
export default SearchHotel;

function removeChildren() {
  const wrapperElements = document.querySelector('.main__free--hotel');

  while (wrapperElements.firstChild) {
    wrapperElements.removeChild(wrapperElements.firstChild);
  }
}

function createBlockError() {
  document.querySelector('.main__container--free').style.display = 'block';
  const startShow = document.querySelector('.main__free');
  const elementFree = startShow.lastElementChild.lastElementChild;
  const divError = document.createElement('div');

  divError.className = 'free__error';
  elementFree.appendChild(divError);

  const pError = document.createElement('p');
  pError.className = 'error__text';
  pError.textContent = 'Please enter destination or hotel name.';
  divError.appendChild(pError);
}

function f1() {
  const searchPlace = document.getElementById('searchPlace').value.trim().toLowerCase();
  const startShow = document.querySelector('.main__free');
  const elementFree = startShow.lastElementChild.lastElementChild;

  if (searchPlace) {
    removeChildren();
  }

  if (searchPlace === '') {
    removeChildren();
    createBlockError();
    return;
  }

  data.forEach((place) => {
    if (
      searchPlace === place.name.toLowerCase() ||
      searchPlace === place.city.toLowerCase() ||
      searchPlace === place.country.toLowerCase()
    ) {
      document.querySelector('.main__container--free').style.display = 'block';

      console.log(place.city);

      const figure = document.createElement('figure');
      figure.className = 'main__free--element';
      figure.setAttribute('id', place.id);
      elementFree.appendChild(figure);

      const img = document.createElement('img');
      img.setAttribute('src', place.imageUrl);
      img.style.width = `${350}px`;
      img.style.height = `${350}px`;
      figure.appendChild(img);

      const figcaption = document.createElement('figcaption');
      figcaption.className = 'main__name--img';
      figure.appendChild(figcaption);

      const hotelName = document.createElement('a');
      hotelName.setAttribute('href', '#');
      hotelName.className = 'nav__link--country';
      hotelName.innerHTML = place.name;
      figcaption.appendChild(hotelName);

      const countryName = document.createElement('a');
      countryName.setAttribute('href', '#');
      countryName.className = 'main__name--country';
      countryName.innerHTML = `${place.city}  ${place.country}`;
      figcaption.appendChild(countryName);
    }
  });
}
export { f1 };
