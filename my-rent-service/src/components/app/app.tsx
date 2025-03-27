import { JSX } from "react";
import MainPage from "../../pages/main-page/main-page";
import LoginPage from "../../pages/login-page/login-page";
import FavoritesPage from "../../pages/favorites-page/favorites-page";
import ErrorPage from "../../pages/not-found-page/not-found-page";
import OfferPage from "../../pages/offer-page/offer-page";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { AppRoute} from "../../const";
import { PrivateRoute } from "../private-route/private-route";
import { AutorizationStatus } from "../../const";
import { FullOffer, OffersList } from "../../types/offer";

type AppMainPageProps={
  rentalOffersCount: number;
  offersList : OffersList[];
  offers: FullOffer[];
}


function App({rentalOffersCount, offers,offersList}: AppMainPageProps): JSX.Element{
return(
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Main} element={<MainPage rentalOffersCount={rentalOffersCount} offersList={offersList} />} />
      <Route path={AppRoute.Login} element={<LoginPage/>} />
      <Route path={`${AppRoute.Offer}/:id`} element={<OfferPage offers={offers}/>} />
      <Route
          path={ AppRoute.Favorites }
          element={<PrivateRoute autorizationStatus={ AutorizationStatus.Auth }>
            <FavoritesPage />
            </PrivateRoute>
          }/>

      <Route path="*" element={<ErrorPage/>} />
    </Routes>
  </BrowserRouter>
)
}

export default App;