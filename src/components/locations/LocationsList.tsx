import { InitialStateOffer } from '../../store/reducers/offerReducer';
import LocationItem from './LocationItem';

type LocationsListProps = {
  cities: string[];
  currentCity: string;
  setCurrentCity: (offer: InitialStateOffer) => void;
};

function LocationsList({cities, currentCity, setCurrentCity}: LocationsListProps) {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <LocationItem key={city} city={city} currentCity={currentCity} setCurrentCity={setCurrentCity}/>
      ))}
    </ul>
  );
}

export default LocationsList;
