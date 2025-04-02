import {JSX} from 'react';
import { Points } from '../../types/map';

type MapListProps ={
    points: Points[];
    onListItemHover: (title: string) => void; 
}

function MapList({points,onListItemHover}: MapListProps): JSX.Element {
    const handleListItemHover = (evt: React.MouseEvent<HTMLLIElement>) => {
        const title = evt.currentTarget.innerText;
        onListItemHover(title);
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