import { Link, useNavigate } from 'react-router-dom';
import { OfferType } from '../../types/offer';
import { useState } from 'react';
import { updateFavorite } from '../../api/api-action';
import { useAppDispatch, useAppSelector } from '../hooks';
import { FavouritesStatus } from '../../types/favorites';
import { updateFavoritesCount } from '../../store/actions/favorites-actions';
import { AuthorizationStatus } from '../../const';

type OfferCardProps = {
  offer: OfferType;
  onListItemHover?: (listItemName: string) => void;
};

function OfferCard({ offer, onListItemHover }: OfferCardProps): JSX.Element {
  const { id, title, type, previewImage, price, rating, isFavorite, isPremium} = offer;

  const [, setActiveOffer] = useState<string>('');
  const [isFavoriteStatus, setIsFavoriteStatus] = useState<boolean>(isFavorite);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector((state) => state.user.authorizationStatus);
  const favoriteCount = useAppSelector((state) => state.favorites.favoritesCount);
  function handleMouseOver() {
    if (onListItemHover) {
      onListItemHover(id);
    }
    setActiveOffer(id);
  }

  function handleIsFavorite() {
    if (authorizationStatus === AuthorizationStatus.Authorized) {
      if (isFavoriteStatus) {
        dispatch(updateFavorite({
          id: offer.id,
          status: FavouritesStatus.Delete
        }));
        setIsFavoriteStatus(false);
        dispatch(updateFavoritesCount(favoriteCount - 1));
      } else {
        dispatch(updateFavorite({
          id: offer.id,
          status: FavouritesStatus.Add
        }));
        setIsFavoriteStatus(true);
        dispatch(updateFavoritesCount(favoriteCount + 1));
      }
    } else {
      navigate('/login');
    }
  }


  return (
    <article className="cities__card place-card" onMouseOver={handleMouseOver}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`} data-testid="placeImage">
          <img
            key={id}
            className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${
              isFavoriteStatus ? 'place-card__bookmark-button--active' : ''
            } button`}
            type="button"
            onClick={handleIsFavorite}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">
              {isFavoriteStatus ? 'In bookmarks' : 'To bookmarks'}
            </span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${Math.round(rating) * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`} data-testid="placeTitle">{title}</Link>
        </h2>
        <p className="place-card__type">
          {type}
        </p>
      </div>
    </article>
  );
}

export default OfferCard;
