
const Setting= {
    rentalOffersCount:312,
} as const;

const AppRoute ={
    Main : '/',
    Login : '/login',
    Favorites : '/favorites',
    Offer : '/offer/id',
} as const;

const AutorizationStatus = {
    Auth : 'AUTH',
    NoAuth : 'NO_AUTH',
    Unknown : 'UNKNOWN'
}


export { Setting};
export {AppRoute};
export {AutorizationStatus}