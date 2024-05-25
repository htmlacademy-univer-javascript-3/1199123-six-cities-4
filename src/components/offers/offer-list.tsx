import { OfferType } from '../../types/offer';
import OfferCard from './offer-card';
import { FilterType } from '../../const';

type OfferListProps = {
  offerCards: OfferType[];
  sortedBy: string;
  onListItemHover?: (listItemName: string) => void;
}

function OfferList({offerCards, sortedBy, onListItemHover}: OfferListProps) {
  let sortedOfferCards = offerCards;
  if (sortedBy) {
    switch (sortedBy) {
      case FilterType.LowToHigh:
        sortedOfferCards = [...offerCards].sort((a, b) => a.price - b.price);
        break;
      case FilterType.HighToLow:
        sortedOfferCards = [...offerCards].sort((a, b) => b.price - a.price);
        break;
      case FilterType.TopRated:
        sortedOfferCards = [...offerCards].sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
        break;
    }
  }
  return (
    <div className="cities__places-list places__list tabs__content">
      {sortedOfferCards.map((offer) => (
        <OfferCard key={offer.id} offer={offer} onListItemHover={onListItemHover} {...offer}/>
      ))}
    </div>
  );
}

export default OfferList;
