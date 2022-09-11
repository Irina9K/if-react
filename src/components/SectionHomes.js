import '../assets/css/SectionHomes.css';
import '../assets/css/Title.css';
import React, { Component } from 'react';
import { API_URL, PATH_FOR_HOTELS_POPULAR } from '../constans/api';

class SectionHomes extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    fetch(`${API_URL}/${PATH_FOR_HOTELS_POPULAR}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          data,
        });
      });
  }

  render() {
    return (
      <div className="container main__container--homes">
        <section className="main__homes">
          <div className="main__title title_homes">
            <h2>Homes guests loves</h2>
          </div>
          <div className="main__homes--hotel">
            {this.state.data.map((item) => (
              <figure key={item.id} className="main__country">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  style={{
                    height: `${296}px`,
                  }}
                />
                <figcaption className="main__name--img">
                  <a href="src/components/SectionHomes#" className="nav__link--country">
                    {item.name}
                  </a>
                  <a href="src/components/SectionHomes#" className="main__name--country">
                    {item.city} {item.country}
                  </a>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </div>
    );
  }
}

export default SectionHomes;
