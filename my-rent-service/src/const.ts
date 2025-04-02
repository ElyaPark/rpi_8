
const Setting= {
    rentalOffersCount:312,
} as const;

const AppRoute ={
    Main : '/',
    Login : '/login',
    Favorites : '/favorites',
    Offer : '/offer',
} as const;

const AutorizationStatus = {
    Auth : 'AUTH',
    NoAuth : 'NO_AUTH',
    Unknown : 'UNKNOWN'
}



export { Setting};
export {AppRoute};
export {AutorizationStatus}

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';