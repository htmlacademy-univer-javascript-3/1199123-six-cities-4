import { useState } from 'react';
import OfferList from '../../components/offers/offer-list';
import { Map } from '../../components/map/map';
import { Point, Points } from '../../types/point';
import { store } from '../../store';
import { Cities } from '../../const';
import LocationsList from '../../components/locations/locations-list';
import { FilterType } from '../../const';
import { FilterForm } from '../../components/filters/filter-form';
import { Header } from '../../components/header/Header';
import MainEmpty from './main-empty';
import 'leaflet/dist/leaflet.css';


export function Main(): JSX.Element {
  const [currentState, setCurrentState] = useState(store.getState().offer);

  const points: Points = currentState.cityOffers.map((o) => ({
    name: o.id,
    location: o.location
  }));

  const [selectedPoint, setSelectedPoint] = useState<Point | undefined>(points[0]);
  const handleListItemHover = (itemID: string) => {
    const currentPoint = points.find((point) => point.name === itemID);
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
          {currentState.cityOffers.length === 0 ? (
            <MainEmpty city={currentState.city}/>
          ) : (
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{currentState.cityOffers.length.toString()} places to stay in {currentState.city}</b>
                <FilterForm filterTypes={Object.values(FilterType)} handleOfferSort={handleCurrentSortType}></FilterForm>
                <OfferList offerCards={currentState.cityOffers.map((offer) => ({onListItemHover: handleListItemHover, ...offer}))} sortedBy={currentSortType}/>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map city={currentState.cityOffers[0].city} points={points} selectedPoint={selectedPoint} height='800px' width='520px'/>;
                </section>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
