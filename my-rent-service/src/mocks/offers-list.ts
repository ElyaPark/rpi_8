import { OffersList } from "../types/offer";

export const offersList : OffersList[] = [
    {
        'id' : '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        'title': 'Wood and stone place',
        'type' : 'apartament',
        'price' : 370,
        'previewImage': '.././public/img/apartment-01.jpg',
        'city' : {
            'name' : 'Paris',
            'location' : {
                'latitude' : 48.85661,
                'longitude' : 2.351499,
                'zoom' : 13
            }
        },
        'location' : {
            'latitude' : 48.8566100000004,
            'longitude' : 2.342499,
            'zoom' : 16
        },
        'isPremium' : false,
        'isFavorite' : true,
        'rating' : 4.9
    },

    {
        'id': 'a8f5c2d1-7e3a-4c8f-b0f6-9d7f1a8b4c2e',
        'title': 'Cozy Beach House',
        'type': 'house',
        'price': 420,
        'previewImage': '.././public/img/apartment-01.jpg',
        'city': {
            'name': 'Barcelona',
            'location': {
                'latitude': 41.3851,
                'longitude': 2.1734,
                'zoom': 13
            }
        },
        'location': {
            'latitude': 41.3851,
            'longitude': 2.1734,
            'zoom': 13
        },
        
        'isPremium': true,
        'isFavorite': false,
        'rating': 4.7
    },

    {
        'id': 'f3d7a1b2-c4e5-4f6b-a9f8-1c2d3e4f5a6b',
        'title': 'Modern City Loft',
        'type': 'room',
        'price': 280,
        'previewImage': '.././public/img/apartment-01.jpg',
        'city': {
            'name': 'Berlin',
            'location': {
                'latitude': 52.5200,
                'longitude': 13.4050,
                'zoom': 13
            }
        },
        'location': {
            'latitude': 52.5200,
            'longitude': 13.4050,
            'zoom': 13
        },
        'isPremium': false,
        'isFavorite': true,
        'rating': 4.8
    },
    
]