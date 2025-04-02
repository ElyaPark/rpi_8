import { JSX, useState } from "react";
// import CitiesCard from "../../components/cities-card/cities-card";
import {Logo} from "../../components/logo/logo";
import { Link } from "react-router-dom";
import { CitiesCardList } from "../../components/cities-card-lis/cities-card-lis";
import { OffersList } from "../../types/offer";
import Map from "../../components/map/map";
// import { CITY } from "../../mocks/city"; 
// import { POINTS } from "../../mocks/points";
import MapList from "../../components/mapList/mapList";
// import { Points } from "../../types/map";
import { useAppSelector } from "../../hooks/index";

import { CitiesList } from "../../components/citiesList/citiesList";
import { getOffersByCity, SortOffersByType } from "../../utils";
import { SortOptions } from "../../components/sort-options/sort-options";
import { SortOffer } from "../../types/sort";
import MainEmpty from "../../components/main-empty/main-empty";


function MainPage(): JSX.Element {
  const [activeSort, setActiveSort] = useState<SortOffer>('Popular')

  const selectedCity = useAppSelector((state) => state.city);
  const offersList = useAppSelector((state) => state.offers)

  const selectedcityOffers = getOffersByCity(selectedCity?.name, offersList)
  const rentalOffersCount = selectedcityOffers.length;

  const [selectedOffer, setSelectedOffer] = useState< OffersList | null>(
    null 
  )
  
  

  const handleListItemHover = (offerId : string) =>{
    const currentOffer = selectedcityOffers.find((offer) => offer.title === offerId);
    setSelectedOffer(currentOffer || null)
    
  }
  


    return(
        <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo/>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Myemail@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <Link to="/login" className="header__nav-link">
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList selectedCity={selectedCity} />
          </section>
        </div>
        <div className="cities">
          {rentalOffersCount === 0 ?(
            <MainEmpty/>
          ) : (
            <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{rentalOffersCount} places to stay in {selectedCity?.name}</b>
              <SortOptions activeSorting={activeSort} onChange={(newSorting) => setActiveSort(newSorting)}/>
              <CitiesCardList offersList={ SortOffersByType(selectedcityOffers, activeSort) }/>
            </section>
            <div className="cities__right-section-map">
              <section className="cities__map">
                <h1>Аппартаменты города {selectedCity?.name}:</h1>
                <MapList points={selectedcityOffers}  onListItemHover={handleListItemHover}/>
                <Map city={selectedCity}
                points={selectedcityOffers}
                selectedPoint={selectedOffer}
                />
              </section>
            </div>
          </div>
          )
        }

        </div>
      </main>
    </div>
    );
    }
    
    export default MainPage