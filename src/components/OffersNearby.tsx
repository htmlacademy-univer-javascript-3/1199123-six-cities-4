import { OfferType } from '../types/offer';
import OfferCard from './OfferCard';

type offersNearbyProps = {
  offersNearby: OfferType[];
}


export function OffersNearby({ offersNearby }: offersNearbyProps): JSX.Element {
  return (
    <div className="container">
      {offersNearby.length > 0 && (
        <section className="near-places places">
          <h2 className="near-places__title">
            Other places in the neighbourhood
          </h2>
          <div className="near-places__list places__list">
            {offersNearby.map((offerNearby) => (
              <OfferCard offer={offerNearby} key={offerNearby.id} {...offerNearby}/>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
