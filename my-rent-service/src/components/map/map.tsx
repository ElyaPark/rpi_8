import {useRef, useEffect,  JSX} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../useMap/useMap';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import { City, Points } from '../../types/map';
type MapProps = {
  city: City;
  points: Points[];
  selectedPoint: Points | null;

}



function Map({city, points,selectedPoint}:MapProps) : JSX.Element {
  const mapRef = useRef<HTMLDivElement >(null);
  const map = useMap({ mapRef, city });

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
          
          points.map((item) => {
            leaflet
              .marker(
                {
                  lat: item.lat,
                  lng: item.lng,
                },
                {
                  icon:
                    selectedPoint && item.title === selectedPoint.title
                      ? currentCustomIcon
                      : defaultCustomIcon,
                }
              )
              .addTo(map);
          });
        }
      }, [map, points, selectedPoint,currentCustomIcon,defaultCustomIcon]);

    return (
      <div
        style={{height: '400px'}}
        ref={mapRef}
      >
      </div>
    );
  }
  
  export default Map;