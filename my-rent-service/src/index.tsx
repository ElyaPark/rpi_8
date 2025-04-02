import React from 'react';
import ReactDOM from "react-dom/client"
import App from './components/app/app'
// import {Setting} from "./const"
import { offers } from './mocks/offers';
import { offersList } from './mocks/offers-list';
import { reviews } from './mocks/reviews';
import '../public/css/map.css'
import { Provider } from 'react-redux';
import {store} from './store'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        rentalOffersCount = { offersList.length }
        reviewsOffersCount = {reviews.length}
        offersList = { offersList }
        offers = { offers }
        reviewsList={reviews}
      />
    </Provider>
    
  </React.StrictMode>
)