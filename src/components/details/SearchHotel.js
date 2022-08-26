import React from 'react';
import IconsSVG from '../../assets/img/sprite.svg';

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

// function removeChildren() {
//   const wrapperElements = document.querySelector('.main__free--hotel');
//
//   while (wrapperElements.firstChild) {
//     wrapperElements.removeChild(wrapperElements.firstChild);
//   }
// }

// function createBlockError() {
//   document.querySelector('.main__container--free').style.display = 'block';
//   const startShow = document.querySelector('.main__free');
//   const elementFree = startShow.lastElementChild.lastElementChild;
//   const divError = document.createElement('div');
//
//   divError.className = 'free__error';
//   elementFree.appendChild(divError);
//
//   const pError = document.createElement('p');
//   pError.className = 'error__text';
//   pError.textContent = 'Please enter destination or hotel name.';
//   divError.appendChild(pError);
// }

// function f1() {
//   const searchPlace = document.getElementById('searchPlace').value.trim().toLowerCase();
//   const startShow = document.querySelector('.main__free');
//   const elementFree = startShow.lastElementChild.lastElementChild;
//
//   // if (searchPlace) {
//   //   removeChildren();
//   // }
//   //
//   // if (searchPlace === '') {
//   //   removeChildren();
//   //   createBlockError();
//   //   return;
//   // }
//
//   data.forEach((place) => {
//     if (
//       searchPlace === place.name.toLowerCase() ||
//       searchPlace === place.city.toLowerCase() ||
//       searchPlace === place.country.toLowerCase()
//     ) {
//       document.querySelector('.main__container--free').style.display = 'block';
//
//       console.log(place.city);
//
//       const figure = document.createElement('figure');
//       figure.className = 'main__free--element';
//       figure.setAttribute('id', place.id);
//       elementFree.appendChild(figure);
//
//       const img = document.createElement('img');
//       img.setAttribute('src', place.imageUrl);
//       img.style.width = `${350}px`;
//       img.style.height = `${350}px`;
//       figure.appendChild(img);
//
//       const figcaption = document.createElement('figcaption');
//       figcaption.className = 'main__name--img';
//       figure.appendChild(figcaption);
//
//       const hotelName = document.createElement('a');
//       hotelName.setAttribute('href', '#');
//       hotelName.className = 'nav__link--country';
//       hotelName.innerHTML = place.name;
//       figcaption.appendChild(hotelName);
//
//       const countryName = document.createElement('a');
//       countryName.setAttribute('href', '#');
//       countryName.className = 'main__name--country';
//       countryName.innerHTML = `${place.city}  ${place.country}`;
//       figcaption.appendChild(countryName);
//     }
//   });
// }
// export { f1 };
