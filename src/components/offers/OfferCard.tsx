import { Link } from 'react-router-dom';
import { OfferType } from '../../types/offer';
import { useState } from 'react';

type OfferCardProps = {
  offer: OfferType;
};

function OfferCard({ offer }: OfferCardProps): JSX.Element {
  const { id, title, type, preview, costPerNight, rating, isFavourites, isPremium, onListItemHover} = offer;

  const [activeOffer, setActiveOffer] = useState<string>('');
  function handleMouseOver() {
    if (onListItemHover) {
      onListItemHover(title);
    }
    setActiveOffer(id);
  }

  return (
    <article className="cities__card place-card" onMouseOver={handleMouseOver}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            key={id}
            className="place-card__image"
            src={preview[0]}
            width="260"
            height="200"
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{costPerNight}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${
              isFavourites ? 'place-card__bookmark-button--active' : ''
            } button`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">
              {isFavourites ? 'In bookmarks' : 'To bookmarks'}
            </span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${activeOffer}`}>{title}</Link>
        </h2>
        <p className="place-card__type">
          {type}
        </p>
      </div>
    </article>
  );
}

export default OfferCard;
