import React from 'react';
import '../assets/css/SectionAvailables.css';
import '../assets/css/Title.css';

const SectionAvailable = () => (
  <div>
    <div className="container main__container--free">
      <section className="main__free">
        <div className="row__free">
          <div className="main__title title_free">
            <h2>Available hotels</h2>
          </div>
            <div className='main__free--hotel'></div>
        </div>
      </section>
    </div>
  </div>
);

export default SectionAvailable;
