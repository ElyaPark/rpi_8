import { OffersList } from "../types/offer";

export const offersList : OffersList[] = [
    {
        'id' : '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        'title': 'Wood and stone place',
        'type' : 'apartament',
        'price' : 370,
        'previewImage' :  '.././public/img/apartment1-01.jpg',
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
        'isFavorite' : true,
        'isPremium' : false,
        'rating' : 4.9,
    },



    {
        "id": "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6",
        "title": "Cozy Apartment in the Heart of Cologne",
        "type": "apartment",
        "price": 120,
        'previewImage' : '.././public/img/apartment1-02.jpg',
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
        "isFavorite": false,
        "isPremium": true,
        "rating": 4.7,
      },



      {
        "id": "b2c3d4e5-f6g7-8h9i-0j1k-l2m3n4o5p6q7",
        "title": "Modern Loft near Grand Place",
        "type": "loft",
        "price": 200,
        'previewImage' : '.././public/img/apartment1-03.jpg',
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
        "isFavorite": true,
        "isPremium": false,
        "rating": 4.5,

      },



      {
        "id": "c3d4e5f6-g7h8-9i0j-1k2l-m3n4o5p6q7r8",
        "title": "Charming Canal House",
        "type": "house",
        "price": 300,
        'previewImage' : '.././public/img/apartment1-05.jpg',
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
        "isFavorite": true,
        "isPremium": true,
        "rating": 4.9,

      },
   
]