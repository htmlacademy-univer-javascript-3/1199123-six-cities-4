import LocationItem from './LocationItem';

type LocationsListProps = {
  cities: string[];
  currentCity: string;
};

function LocationsList({cities, currentCity}: LocationsListProps) {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <LocationItem key={city} city={city} currentCity={currentCity}/>
      ))}
    </ul>
  );
}

export default LocationsList;
