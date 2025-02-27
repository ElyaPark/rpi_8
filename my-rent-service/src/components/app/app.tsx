import { JSX } from "react";
import MainPage from "../../pages/main-page/main-page";
import LoginPage from "../../pages/login-page/login-page";
import FavoritesPage from "../../pages/favorites-page/favorites-page";
import ErrorPage from "../../pages/not-found-page/not-found-page";
import OfferPage from "../../pages/offer-page/offer-page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoute} from "../../const";
import { PrivateRoute } from "../private-route/private-route";
import { AutorizationStatus } from "../../const";
type AppMainPageProps={
    rentalOffersCount: number;
}


function App({rentalOffersCount}: AppMainPageProps): JSX.Element{
  return(
    <Router>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage rentalOffersCount={rentalOffersCount} />} />
        <Route path={AppRoute.Login} element={<LoginPage/>} />
        <Route path={AppRoute.Offer} element={<OfferPage/>} />
        <Route path={AppRoute.Favorites} 
          element={
            <PrivateRoute
              autorizationStatus={AutorizationStatus.NoAuth}>
                <FavoritesPage/>
            </PrivateRoute>
            } 
          />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </Router>
  )
}

export default App;