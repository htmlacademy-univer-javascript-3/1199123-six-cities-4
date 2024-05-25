import { OfferType } from '../../types/offer';
import OfferCard from '../../components/offers/OfferCard';
import { Header } from '../../components/header/Header';

type FavouritesPageProps = {
  favouritesList: OfferType[];
};

export function Favourites({favouritesList}: FavouritesPageProps): JSX.Element {
  const favouritesMapped = favouritesList.reduce(
    (accumulator: Record<string, OfferType[]>, offer: OfferType) => {
      if (offer.city.name in accumulator) {
        accumulator[offer.city.name].push(offer);
      } else {
        accumulator[offer.city.name] = [offer];
      }
      return accumulator;
    },
    {}
  );
  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.keys(favouritesMapped).map((city) => (
                <li className="favorites__locations-items" key={city}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {favouritesMapped[city].map((offer) => (
                      <OfferCard key={offer.id} offer={offer}></OfferCard>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
}
