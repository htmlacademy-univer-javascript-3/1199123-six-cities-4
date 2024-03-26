import { OfferType } from '../types/offer';
import OfferCard from './OfferCard';

type OfferListProps = {
  offerCards: OfferType[];
}

function OfferList({offerCards}: OfferListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offerCards.map((offer) => (
        <OfferCard key={offer.id} offer={offer} {...offer}/>
      ))}
    </div>
  );
}

export default OfferList;
