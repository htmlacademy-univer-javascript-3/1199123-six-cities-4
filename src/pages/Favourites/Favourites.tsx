import { OfferType } from '../../types/offer';
import OfferCard from '../../components/offers/offer-card';
import { Header } from '../../components/header/header';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../components/hooks';
import { useEffect } from 'react';
import { fetchFavorites } from '../../api/api-action';


export function Favourites(): JSX.Element {
  const favoritesList = useAppSelector((state) => state.favorites.favorites);
  const favoriteCount = useAppSelector((state) => state.favorites.favoritesCount);

  const dispatch = useAppDispatch();
  const favoritesMapped = favoritesList.reduce(
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

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch, favoriteCount]);

  if (Object.keys(favoritesMapped).length === 0) {
    return (
      <div className="page">
        <Header/>
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Nothing yet saved</h1>
            </section>
          </div>
        </main>
        <footer className="footer container">
          <a className="footer__logo-link" href='#'>
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
          </a>
        </footer>
      </div>
    );
  }

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.keys(favoritesMapped).map((city) => (
                <li className="favorites__locations-items" key={city}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {favoritesMapped[city].map((offer) => (
                      <OfferCard key={offer.id} offer={offer} {...offer}/>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link to={'/'} className="footer__logo-link">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
}
