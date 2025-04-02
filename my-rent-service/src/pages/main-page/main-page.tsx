import { JSX, useState } from "react";
import CitiesCard from "../../components/cities-card/cities-card";
import {Logo} from "../../components/logo/logo";
import { Link } from "react-router-dom";
import { CitiesCardList } from "../../components/cities-card-lis/cities-card-lis";
import { OffersList } from "../../types/offer";
import Map from "../../components/map/map";
import { CITY } from "../../mocks/city"; 
import { POINTS } from "../../mocks/points";
import MapList from "../../components/mapList/mapList";
import { Points } from "../../types/map";
type MainPageProps ={
  rentalOffersCount: number;
  offersList: OffersList[]
}


function MainPage({rentalOffersCount, offersList}: MainPageProps): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<Points | null>(null);

  const handleListItemHover = (listItemName:string) => {
    const currentPoint = POINTS.find((point) =>
      point.title === listItemName,
    );
    setSelectedPoint(currentPoint || null);
  };


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
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Paris</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Cologne</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Brussels</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item tabs__item--active">
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Hamburg</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{rentalOffersCount} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use href="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <CitiesCardList offersList={ offersList }/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map">
                <h1>Парки города {CITY.title}:</h1>
                <MapList points={POINTS} onListItemHover={handleListItemHover}/>
                <Map city={CITY}
                points={POINTS}
                  selectedPoint={selectedPoint}
                  />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
    );
    }
    
    export default MainPage