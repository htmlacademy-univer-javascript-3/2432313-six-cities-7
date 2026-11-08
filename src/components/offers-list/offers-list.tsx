import PlaceCard from '../place-card/place-card';
import { Offer } from '../../types';

type OffersListProps = {
  offers: Offer[];
  variant?: 'cities' | 'near-places';
  onCardMouseEnter?: (offer: Offer) => void;
  onCardMouseLeave?: () => void;
};

export default function OffersList({
  offers,
  variant = 'cities',
  onCardMouseEnter,
  onCardMouseLeave
}: OffersListProps): JSX.Element {
  const listClass = variant === 'cities'
    ? 'cities__places-list places__list tabs__content'
    : 'near-places__list places__list';

  return (
    <div className={listClass}>
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          variant={variant}
          onMouseEnter={onCardMouseEnter}
          onMouseLeave={onCardMouseLeave}
        />
      ))}
    </div>
  );
}
