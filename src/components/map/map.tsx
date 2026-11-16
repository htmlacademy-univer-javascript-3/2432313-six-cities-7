import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Offer } from '../../types';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

type IconDefaultWithGetUrl = typeof L.Icon.Default & {
  prototype: {
    _getIconUrl?: () => string;
  };
};

delete (L.Icon.Default as IconDefaultWithGetUrl).prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

const defaultCustomIcon = new L.Icon({
  iconUrl: 'img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

const currentCustomIcon = new L.Icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

type MapProps = {
  offers: Offer[];
  activeOffer?: Offer | null;
  mapClassName?: string;
};

export default function Map({ offers, activeOffer, mapClassName = 'cities__map' }: MapProps): JSX.Element {
  const center: [number, number] = [52.37454, 4.897976];
  const zoom = 13;

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      className={mapClassName}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {offers.map((offer) => (
        <Marker
          key={offer.id}
          position={[offer.location.latitude, offer.location.longitude]}
          icon={offer.id === activeOffer?.id ? currentCustomIcon : defaultCustomIcon}
        >
          <Popup>
            <b>{offer.title}</b>
            <br />
            &euro;{offer.price} / night
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
