import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { API_URL, PATH_FOR_HOTELS_POPULAR } from '../constants/api.constants';
import '../assets/css/SectionHomes.css';
import '../assets/css/Title.css';

const SectionHomes = () => {
  const [data, setData] = useState([]);
  const conditionReducer = useSelector((state) => state.reducer.isLogin);

  useEffect(() => {
    fetch(`${API_URL}/${PATH_FOR_HOTELS_POPULAR}`)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  return (
    <div className="container main__container--homes">
      <section className={conditionReducer ? 'main__homesBlock' : 'main__homesNone'}>
        <div className="main__title title_homes">
          <h2>Homes guests loves</h2>
        </div>
        <div className="main__homes--hotel">
          {data.map((item) => (
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
};

export default SectionHomes;

//
// class SectionHomes extends Component {
//   state = {
//     data: [],
//   };
//
//   componentDidMount() {
//     fetch(`${API_URL}/${PATH_FOR_HOTELS_POPULAR}`)
//       .then((response) => response.json())
//       .then((data) => {
//         this.setState({
//           data,
//         });
//       });
//   }
//
//   render() {
//     return (
//
//     );
//   }
// }
//
// export default SectionHomes;
