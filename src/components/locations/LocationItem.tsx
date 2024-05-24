import { updateCity } from '../../store/action';
import { useState } from 'react';
import { store } from '../../store';
import { useAppDispatch } from '../hooks';

type LocationItemProps = {
  city: string;
  currentCity: string;
};

function LocationItem({ city, currentCity }: LocationItemProps): JSX.Element {
  const [, setCurrentState] = useState(store.getState());
  const handleCurrentState = () => {
    setCurrentState(store.getState());
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
