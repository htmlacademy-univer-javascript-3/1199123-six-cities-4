import { useDispatch } from 'react-redux';
import { updateOffers } from '../../store/action';
import { OfferType } from '../../types/offer';

type LocationItemProps = {
  city: string;
  currentState: {city: string; offers: OfferType[]};
};

function LocationItem({ city, currentState }: LocationItemProps): JSX.Element {
  const dispatch = useDispatch();

  return (
    <li className="locations__item">
      <a
        className={`locationsitem-link tabsitem ${currentState.city === city ? 'tabs__item--active' : ''}`}
        href="#" onClick={() => {
          dispatch(updateOffers(city));
        }}
      >
        <span>{city}</span>
      </a>
    </li>
  );
}
export default LocationItem;
