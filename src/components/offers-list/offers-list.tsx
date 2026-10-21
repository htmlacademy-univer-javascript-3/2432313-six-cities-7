import PlaceCard from '../place-card/place-card';
import { Offer } from '../../types';

type OffersListProps = {
  offers: Offer[];
  onCardMouseEnter?: (offer: Offer) => void;
  onCardMouseLeave?: () => void;
};

export default function OffersList({
  offers,
  onCardMouseEnter,
  onCardMouseLeave
}: OffersListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          onMouseEnter={onCardMouseEnter}
          onMouseLeave={onCardMouseLeave}
        />
      ))}
    </div>
  );
}
