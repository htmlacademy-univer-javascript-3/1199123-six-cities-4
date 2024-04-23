import LocationItem from './LocationItem';
import { OfferType } from '../../types/offer';

type LocationsListProps = {
  cities: string[];
  currentState: {city: string; offers: OfferType[]};
  handleCurrentState: () => void;
};

function LocationsList({cities, currentState, handleCurrentState}: LocationsListProps) {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <LocationItem key={city} city={city} currentState={{city: currentState.city, offers: currentState.offers}} handleCurrentState={handleCurrentState}></LocationItem>
      ))}
    </ul>
  );
}

export default LocationsList;