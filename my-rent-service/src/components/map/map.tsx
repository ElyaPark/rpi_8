import {useRef, useEffect, JSX} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../useMap/useMap';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT, CITIES_LOCATION} from '../../const';
import { OffersList, CityOffer } from '../../types/offer';

type MapProps = {
  city: CityOffer;
  points: OffersList[];
  selectedPoint: OffersList | null;
};

function Map({city, points, selectedPoint}: MapProps): JSX.Element {
  const mapRef = useRef<HTMLDivElement>(null);
  
  const cityData = CITIES_LOCATION.find((c) => c.name === city.name);
  const cityLocation = cityData?.location || city.location;

  const map = useMap({ 
    mapRef, 
    city: { 
      name: city.name, 
      location: cityLocation 
    } 
  });

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      map.eachLayer((layer) => {
        if (layer instanceof leaflet.Marker) {
          map.removeLayer(layer);
        }
      });

      map.setView(
        [cityLocation.latitude, cityLocation.longitude], 
        cityLocation.zoom
      );

      points.map((point) => {
        leaflet
          .marker(
            {
              lat: point.location.latitude,
              lng: point.location.longitude,
            },
            {
              icon: selectedPoint?.id === point.id 
                ? currentCustomIcon 
                : defaultCustomIcon,
            }
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint, cityLocation, currentCustomIcon, defaultCustomIcon]);

  return (
    <div
      style={{height: '400px'}}
      ref={mapRef}
    />
  );
}

export default Map;