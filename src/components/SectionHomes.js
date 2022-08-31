import '../assets/css/SectionHomes.css';
import '../assets/css/Title.css';
import { data } from './constans/constans';

function SectionHomes() {
  return (
    <div className="container main__container--homes">
      <section className="main__homes">
        <div className="main__title title_homes">
          <h2>Homes guests loves</h2>
        </div>
        <div className="main__homes--hotel">
          {data.map((item) => (
            <figure key={item.id} className="main__country">
              <img src={item.imageUrl} alt="hotel_name" />
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

export default SectionHomes;
