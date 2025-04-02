import { FullOffer } from "../types/offer";


const offers: FullOffer[] = [
    {
        'id' : '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        'title': 'Wood and stone place',
        'description' : 'A new spacius villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for familes',
        'type' : 'apartament',
        'price' : 370,
        'images' : [
            '.././public/img/apartment1-01.jpg',
            '.././public/img/apartment1-02.jpg',
            '.././public/img/apartment1-03.jpg',
            '.././public/img/apartment1-04.jpg',
            '.././public/img/apartment1-05.jpg',
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
            'zoom' : 13
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
        "id": "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6",
        "title": "Cozy Apartment in the Heart of Cologne",
        "description": "A charming apartment located in the historic center of Cologne. Perfect for couples or small families, with easy access to the cathedral and local attractions.",
        "type": "apartment",
        "price": 120,
        'images' : [
          '.././public/img/apartment1-01.jpg',
          '.././public/img/apartment1-02.jpg',
          '.././public/img/apartment1-03.jpg',
          '.././public/img/apartment1-04.jpg',
          '.././public/img/apartment1-05.jpg',
      ],
        "city": {
          "name": "Cologne",
          "location": {
            "latitude": 50.937531,
            "longitude": 6.960279,
            "zoom": 12
          }
        },
        "location": {
          "latitude": 50.937531,
          "longitude": 6.960279,
          "zoom": 12
        },
        "goods": [
          "Wi-Fi",
          "Heating",
          "Kitchen",
          "Washing machine",
          "Towels",
          "Coffee machine",
          "Laptop friendly workspace"
        ],
        "host": {
          "isPro": true,
          "name": "Michael",
          "avatarUrl": ".././public/img/avatar-michael.jpg"
        },
        "isPremium": true,
        "isFavorite": false,
        "rating": 4.7,
        "bedrooms": 1,
        "maxAdults": 2
      },

      {
        "id": "b2c3d4e5-f6g7-8h9i-0j1k-l2m3n4o5p6q7",
        "title": "Modern Loft near Grand Place",
        "description": "A stylish loft with a view of the city center. Ideal for travelers who want to explore Brussels' vibrant culture and cuisine.",
        "type": "loft",
        "price": 200,
        'images' : [
          '.././public/img/apartment1-01.jpg',
          '.././public/img/apartment1-02.jpg',
          '.././public/img/apartment1-03.jpg',
          '.././public/img/apartment1-04.jpg',
          '.././public/img/apartment1-05.jpg',
      ],
        "city": {
          "name": "Brussels",
          "location": {
            "latitude": 50.850346,
            "longitude": 4.351721,
            "zoom": 13
          }
        },
        "location": {
          "latitude": 50.850346,
          "longitude": 4.351721,
          "zoom": 13
        },
        "goods": [
          "Wi-Fi",
          "Air conditioning",
          "Heating",
          "Kitchen",
          "Dishwasher",
          "Coffee machine",
          "Laptop friendly workspace",
          "TV"
        ],
        "host": {
          "isPro": false,
          "name": "Sophie",
          "avatarUrl": "avatar-sophie.jpg"
        },
        "isPremium": false,
        "isFavorite": true,
        "rating": 4.5,
        "bedrooms": 2,
        "maxAdults": 4
      },

      {
        "id": "c3d4e5f6-g7h8-9i0j-1k2l-m3n4o5p6q7r8",
        "title": "Charming Canal House",
        "description": "A beautiful house located along one of Amsterdam's iconic canals. Perfect for a romantic getaway or a small group of friends.",
        "type": "house",
        "price": 300,
        'images' : [
          '.././public/img/apartment1-01.jpg',
          '.././public/img/apartment1-02.jpg',
          '.././public/img/apartment1-03.jpg',
          '.././public/img/apartment1-04.jpg',
          '.././public/img/apartment1-05.jpg',
      ],
        "city": {
          "name": "Amsterdam",
          "location": {
            "latitude": 52.370216,
            "longitude": 4.895168,
            "zoom": 14
          }
        },
        "location": {
          "latitude": 52.370216,
          "longitude": 4.895168,
          "zoom": 14
        },
        "goods": [
          "Wi-Fi",
          "Heating",
          "Kitchen",
          "Washing machine",
          "Towels",
          "Coffee machine",
          "Laptop friendly workspace",
          "Bicycle rental"
        ],
        "host": {
          "isPro": true,
          "name": "Emma",
          "avatarUrl": "avatar-emma.jpg"
        },
        "isPremium": true,
        "isFavorite": true,
        "rating": 4.9,
        "bedrooms": 3,
        "maxAdults": 5
      },
]

export {offers};