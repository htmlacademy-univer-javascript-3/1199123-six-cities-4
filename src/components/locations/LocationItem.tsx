import { updateCity } from '../../store/action';
import { store } from '../../store';
import { useAppDispatch } from '../hooks';
import { InitialState } from '../../store/reducer';

type LocationItemProps = {
  city: string;
  currentCity: string;
  setCurrentCity: (offer: InitialState) => void;
};

function LocationItem({ city, currentCity, setCurrentCity }: LocationItemProps): JSX.Element {
  const handleCurrentState = () => {
    setCurrentCity(store.getState());
  };
  const dispatch = useAppDispatch();
  return (
    <li className="locations__item">
      <a
        className={`locationsitem-link tabsitem ${currentCity === city ? 'tabs__item--active' : ''}`}
        href="#" onClick={() => {
          dispatch(updateCity(city));
          handleCurrentState();
        }}
      >
        <span>{city}</span>
      </a>
    </li>
  );
}
export default LocationItem;
