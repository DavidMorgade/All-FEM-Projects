// React Leaflet
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
} from 'react-leaflet';
import L from 'leaflet';
import iconShadow from 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/leaflet.css';
import '../../styles/Map.css';
// Icon
import { MarkerIcon } from '../../images/images';
// Custom Hooks
import { useDataContext } from '../../context/useDataContext';
import { useLoadContext } from '../../context/useLoadContext';
import { Fragment } from 'react';
// Loading Spiner
import Spinner from './Spinner';

const iconLocation = new L.icon({
  iconUrl: MarkerIcon,
  iconShadow,
  iconSize: [45, 60],
  iconAnchor: [22, 94],
  shadowAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

const MapView = () => {
  const [data, setdata] = useDataContext({});
  const [loaded, setLoaded] = useLoadContext()
  const SetViewOnClick = ({ coords }) => {
    const map = useMap();
    map.setView(coords, map.getZoom());
  
    return null;
  }
  if(!loaded) return <Spinner />;
    return (

    <Fragment>
      {data && <MapContainer
        zoomControl={false}
        className="map"
        center={[data.location.lat, data.location.lng]}
        zoom={12}
        scrollWheelZoom={true}
      >
        <SetViewOnClick coords={[data.location.lat, data.location.lng]} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[data.location.lat, data.location.lng]} icon={iconLocation}>
        </Marker>
      </MapContainer>}
    </Fragment>
  );
};

export default MapView;
