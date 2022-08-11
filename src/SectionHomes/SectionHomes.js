import data from './data.json';
import './SectionHomes.css';

function SectionHomes() {
  return (
    <div className="main__container--homes">
      <section className="main__homes">
        <div>
          <h2>Homes guests loves</h2>
        </div>
        <div className="main__homes--hotel">
          {data.map((item) => (
            <>
              <figure className="main__country">
                <img src={item.imageUrl} alt="hotel_name" />
                <figcaption className="main__name--img">
                  <a href="#" className="nav__link--country">
                    {item.name}
                  </a>
                  <a href="#" className="main__name--country">
                    {item.city} {item.country}
                  </a>
                </figcaption>
              </figure>
            </>
          ))}
        </div>
      </section>
    </div>
  );
}

export default SectionHomes;