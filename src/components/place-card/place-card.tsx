import { Offer } from '../../types';
import { Link } from 'react-router-dom';

type PlaceCardProps = {
  offer: Offer;
  variant?: 'cities' | 'near-places';
  onMouseEnter?: (offer: Offer) => void;
  onMouseLeave?: () => void;
};

export default function PlaceCard({
  offer,
  variant = 'cities',
  onMouseEnter,
  onMouseLeave
}: PlaceCardProps): JSX.Element {
  const {
    id,
    title,
    type,
    price,
    rating,
    isPremium,
    isFavorite,
    previewImage,
  } = offer;

  const cardClass = variant === 'cities' ? 'cities__card' : 'near-places__card';
  const imageWrapperClass = variant === 'cities' ? 'cities__image-wrapper' : 'near-places__image-wrapper';

  return (
    <article
      className={`${cardClass} place-card`}
      onMouseEnter={() => onMouseEnter?.(offer)}
      onMouseLeave={() => onMouseLeave?.()}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}

      <div className={`${imageWrapperClass} place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place" />
        </Link>
      </div>

      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">
              {isFavorite ? 'In bookmarks' : 'To bookmarks'}
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
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>

        <p className="place-card__type">{type[0].toUpperCase() + type.slice(1)}</p>
      </div>
    </article>
  );
}
