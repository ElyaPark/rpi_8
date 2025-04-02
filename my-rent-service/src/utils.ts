import { CityOffer,OffersList } from './types/offer';
import { CITIES_LOCATION } from './const';
import { SortOffersType } from './const';
import { SortOffer } from './types/sort';
export const getCity = (cityName: string, cities: CityOffer[] = CITIES_LOCATION): CityOffer => {
  const foundCity = cities.find((city) => city.name === cityName);
  
  if (!foundCity) {
    const defaultCity = cities.find((city) => city.name === 'Paris');
    if (!defaultCity) throw new Error('Default city (Paris) not found in CITIES_LOCATION');
    return defaultCity;
  }
  
  return foundCity;
};


export const getOffersByCity = (
    cityName: string | undefined,
    offersList: OffersList[]
  ):
   OffersList[] => {
    if (!cityName) return [];
    return offersList.filter((offer) => offer.city.name === cityName);
  };

function SortOffersByType (offers: OffersList[], type: SortOffer) : OffersList[] {
  switch (type){
    case SortOffersType.PriceToHigt:
      return offers.sort((a,b) => a.price - b.price);
    case SortOffersType.PriceToLow:
      return offers.sort((a,b) => b.price - a.price)
    case SortOffersType.TopRated:
      return offers.sort((a,b) => a.rating - b.rating)
    default:
      return offers
  }
}

export {SortOffersByType}
  