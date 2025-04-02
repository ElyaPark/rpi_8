import {JSX} from 'react';
import { OffersList } from '../../types/offer';

type MapListProps ={
    points: OffersList[];
    onListItemHover: (id: string) => void; 
}

function MapList({points,onListItemHover}: MapListProps): JSX.Element {
    const handleListItemHover = (evt: React.MouseEvent<HTMLLIElement>) => {
        const id = evt.currentTarget.innerText;
        onListItemHover(id);
      };
    
    return (
      <ul className="list">{
        points.map((point, index) => {
          const keyValue = `${index}-${point.title}`;
  
          return (
            <li
              className="list__item"
              key={keyValue}
              onMouseEnter={handleListItemHover}
            >
              {point.title}
            </li>
          );
        })
      }</ul>
    );
  }
  
  export default MapList;