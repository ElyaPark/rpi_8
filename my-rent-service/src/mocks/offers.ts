import { FullOffer } from "../types/offer";


const offers: FullOffer[] = [
    {
        'id' : '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        'title': 'Wood and stone place',
        'description' : 'A new spacius villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for familes',
        'type' : 'apartament',
        'price' : 370,
        'images' : [
            '../../public/img/apartment-01.jpg',
            '../../public/img/apartment-02.jpg',
            '../../public/img/apartment-03.jpg',
        ],
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

        'goods' : [
            'Heating',
            'Wi-Fi',
            'Fridge',
            'Laptop friendly workspace',
            'Baby seat',
            'Air conditioning',
            'Washer',
            'Towels',
            'Dishwasher',
            'Kitchen',
            'Washing machine',
            'Breakfast',
            'Coffee machine'
        ],
        'host' : {
            'isPro': true,
            'name' : 'Angelina',
            'avatarUrl' : '.././public/img/avatar-angelina.jpg'
        },

        'isPremium' : false,
        'isFavorite' : true,
        'rating' : 4.9,
        'bedrooms' : 2,
        'maxAdults' : 3
    },

    {
        'id': 'a8f5c2d1-7e3a-4c8f-b0f6-9d7f1a8b4c2e',
        'title': 'Cozy Beach House',
        'description': 'A charming beachfront house with stunning ocean views. Fully equipped kitchen, outdoor BBQ area, and private beach access. Perfect for couples and small families.',
        'type': 'house',
        'price': 420,
        'images' : [
            '../../public/img/apartment-01.jpg',
            '../../public/img/apartment-02.jpg',
            '../../public/img/apartment-03.jpg',
        ],
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
        'goods': [
            'Heating',
            'Wi-Fi',
            'Fridge',
            'Laptop friendly workspace',
            'Air conditioning',
            'Washer',
            'Towels',
            'Dishwasher',
            'Kitchen',
            'Washing machine',
            'Breakfast',
            'Coffee machine',
            'Pool'
        ],
        'host': {
            'isPro': false,
            'name': 'John',
            'avatarUrl': '.././public/img/avatar-john.jpg'
        },
        'isPremium': true,
        'isFavorite': false,
        'rating': 4.7,
        'bedrooms': 3,
        'maxAdults': 6
    },

    {
        'id': 'f3d7a1b2-c4e5-4f6b-a9f8-1c2d3e4f5a6b',
        'title': 'Modern City Loft',
        'description': 'A stylish loft in the heart of the city. Features an open-plan living space, high ceilings, and a rooftop terrace with panoramic city views. Ideal for solo travelers and business guests.',
        'type': 'room',
        'price': 280,
        'images' : [
            '../../public/img/apartment-01.jpg',
            '../../public/img/apartment-02.jpg',
            '../../public/img/apartment-03.jpg',
 
        ],
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
        'goods': [
            'Heating',
            'Wi-Fi',
            'Fridge',
            'Laptop friendly workspace',
            'Air conditioning',
            'Washer',
            'Towels',
            'Dishwasher',
            'Kitchen',
            'Washing machine',
            'Breakfast',
            'Coffee machine',
            'Dryer'
        ],
        'host': {
            'isPro': true,
            'name': 'Emily',
            'avatarUrl': '.././public/img/avatar-emily.jpg'
        },
        'isPremium': false,
        'isFavorite': true,
        'rating': 4.8,
        'bedrooms': 1,
        'maxAdults': 2
    }

]

export {offers};