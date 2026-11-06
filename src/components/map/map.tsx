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

type MapProps = {
  offers: Offer[];
};

export default function Map({ offers }: MapProps): JSX.Element {
  const center: [number, number] = [52.37454, 4.897976];
  const zoom = 13;

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height: '600px', width: '100%' }}
      className="cities__map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {offers.map((offer) => (
        <Marker
          key={offer.id}
          position={[offer.location.latitude, offer.location.longitude]}
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
