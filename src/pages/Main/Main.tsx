import { useState } from 'react';
import OfferList from '../../components/offers/OfferList';
import { Map } from '../../components/map/map';
import { Point, Points } from '../../types/point';
import { store } from '../../store';
import { Cities } from '../../const';
import LocationsList from '../../components/locations/LocationsList';
import { FilterType } from '../../const';
import { FilterForm } from '../../components/filters/FilterForm';
import 'leaflet/dist/leaflet.css';
import { Header } from '../../components/header/Header';

export function Main(): JSX.Element {
  const [currentState, setCurrentState] = useState(store.getState());


  const points: Points = currentState.cityOffers.map((o) => ({
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
      <Header/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList cities={Cities} currentCity={currentState.city} setCurrentCity={setCurrentState}></LocationsList>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentState.cityOffers.length.toString()} places to stay in {currentState.city}</b>
              <FilterForm filterTypes={Object.values(FilterType)} handleOfferSort={handleCurrentSortType}></FilterForm>
              <div className="cities__places-list places__list tabs__content">
                <OfferList offerCards={currentState.cityOffers.map((offer) => ({onListItemHover: handleListItemHover, ...offer}))} sortedBy={currentSortType}/>
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
