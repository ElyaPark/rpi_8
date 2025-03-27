import { OffersList } from "../../types/offer";
import FavoritesCard from "../cities-card/cities-card";

type FavoritesCardListProps = {
    offersList : OffersList[];
};

function FavoritesCardList ({offersList} : FavoritesCardListProps ){
    return(
        <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>Amsterdam</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
        {Array.from(offersList, (item) =>
            <FavoritesCard key={ item.id } id = { item.id } title = { item.title }  type = { item.type } price = { item.price } 
                            previewImage = { item.previewImage } isPremium = {item.isPremium} rating = { item.rating } />)}        
        </div>
      </li>
       
    );
}

export {FavoritesCardList}