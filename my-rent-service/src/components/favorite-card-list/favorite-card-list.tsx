import { JSX } from "react";
import { OffersList } from "../../types/offer";
import FavoritesCard from "../favorite-card/favorite-card";

type FavotitesCardListProps = {
    offersList : OffersList[];
    city: string;
};

function FavoritesCardList({offersList,city} : FavotitesCardListProps ): JSX.Element {
  const favoriteOffers = offersList.filter(
    (item) => item.isFavorite && item.city.name === city);
      return(      
        <li className="favorites__locations-items" >
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>{city}</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {favoriteOffers.length > 0 ? (
                    favoriteOffers.map((item) => (
                      <FavoritesCard
                        key={item.id}
                        id={item.id}
                        city={item.city.name}
                        title={item.title}
                        type={item.type}
                        price={item.price}
                        previewImage={item.previewImage}
                        isPremium={item.isPremium}
                        rating={item.rating}
                        isFavorite={item.isFavorite}
                      />
                    ))
                  ) : (
                    <p>No favorites yet.</p>
                  )}
                </div>
              </li>
        );
    }

export default FavoritesCardList;
    