import { useState } from 'react';
import { Link } from 'react-router-dom';
import OfferList from '../../components/offers/OfferList';
import { Map } from '../../components/map/map';
import { Point, Points } from '../../types/point';
import { store } from '../../store';
import { Cities } from '../../const';
import LocationsList from '../../components/locations/LocationsList';
import { FilterType } from '../../const';
import { FilterForm } from '../../components/filters/FilterForm';
import 'leaflet/dist/leaflet.css';

export function Main(): JSX.Element {
  const [currentState] = useState(store.getState());

  const points: Points = currentState.offers.map((o) => ({
    id: o.id,
    ...o.city
  }));

  const [selectedPoint, setSelectedPoint] = useState<Point | undefined>(points[0]);
  const handleListItemHover = (itemName: string) => {
    const currentPoint = points.find((point) => point.name === itemName);
    setSelectedPoint(currentPoint);
  };

  const [currentSortType, setCurrentSortType] = useState('Popular');
  const handleCurrentSortType = (updatedSortType: string) => {
    setCurrentSortType(updatedSortType);
  };

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to='/' className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <Link to="/favorites">
                      <span className="header__favorite-count">3</span>
                    </Link>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList cities={Cities} currentCity={currentState.city}></LocationsList>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentState.offers.length.toString()} places to stay in {currentState.city}</b>
              <FilterForm filterTypes={Object.values(FilterType)} handleOfferSort={handleCurrentSortType}></FilterForm>
              <div className="cities__places-list places__list tabs__content">
                <OfferList offerCards={currentState.cityOffers.map((offer) => ({...offer, onListItemHover: handleListItemHover}))} sortedBy={currentSortType}/>
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={{name: 'Amsterdam', location: {longitude: 4.85309666406198, latitude: 52.3909553943508, zoom: 1}}} points={currentState.offers} selectedPoint={selectedPoint}></Map>;
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
