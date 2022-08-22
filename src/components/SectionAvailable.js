import React from 'react';
import '../assets/css/SectionAvailables.css';
import '../assets/css/Title.css';

const SectionAvailable = () => (
  <div className="container main__container--free">
       <section className="main__free">
         <div className="row__free">
           <div className="main__title title__free">
             <h2>Available Hotels</h2>
           </div>
           <div className="main__free--hotel">
             <figure className="main__free--element">
              {/* <img href={place.imageUrl} /> */}
               <figcaption className="main__name--img">
                 {/* <a className="nav__link--country"> {place.name}</a> */}
                 {/* <a className="main__name--country"> */}
                 {/*  {place.city} */}
                 {/*  {place.country} */}
                 {/* </a> */}
               </figcaption>
             </figure>
           </div>
         </div>
       </section>;
  </div>
);

export default SectionAvailable;
