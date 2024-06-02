import { updateCity } from '../../store/actions/offer-actions';
import { store } from '../../store';
import { useAppDispatch } from '../hooks';
import { InitialStateOffer } from '../../store/reducers/offer-reducer';

type LocationItemProps = {
  city: string;
  currentCity: string;
  setCurrentCity: (offer: InitialStateOffer) => void;
};

function LocationItem({ city, currentCity, setCurrentCity }: LocationItemProps): JSX.Element {
  const handleCurrentState = () => {
    setCurrentCity(store.getState().offer);
  };
  const dispatch = useAppDispatch();
  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${currentCity === city ? 'tabs__item--active' : ''}`}
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
