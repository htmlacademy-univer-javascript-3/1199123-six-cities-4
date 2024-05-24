import { OfferType } from '../../types/offer';
import OfferCard from './OfferCard';
import { FilterType } from '../../const';

type OfferListProps = {
  offerCards: OfferType[];
  sortedBy: string;
}

function OfferList({offerCards, sortedBy}: OfferListProps) {
  let sortedOfferCards = offerCards;
  if (sortedBy) {
    switch (sortedBy) {
      case FilterType.LOW_TO_HIGH:
        sortedOfferCards = [...offerCards].sort((a, b) => a.price - b.price);
        break;
      case FilterType.HIGH_TO_LOW:
        sortedOfferCards = [...offerCards].sort((a, b) => b.price - a.price);
        break;
      case FilterType.TOP_RATED:
        sortedOfferCards = [...offerCards].sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
        break;
    }
  }
  return (
    <div className="cities__places-list places__list tabs__content">
      {sortedOfferCards.map((offer) => (
        <OfferCard key={offer.id} offer={offer} {...offer}/>
      ))}
    </div>
  );
}

export default OfferList;
