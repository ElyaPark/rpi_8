import { FullOffer } from "../types/offer";

const offers: FullOffer[] = [
  {
    id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
    title: 'Wood and stone place',
    description: 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families',
    type: 'apartment',
    price: 370,
    images: [
      '.././public/img/apartment-01.jpg',
      '.././public/img/apartment-02.jpg',
      '.././public/img/apartment-03.jpg',
      '.././public/img/apartment-small-03.jpg',
      '.././public/img/apartment-small-04.jpg',
    ],
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.85884,
      longitude: 2.34703,
      zoom: 13
    },
    goods: [
      'Heating', 'Wi-Fi', 'Fridge', 'Laptop friendly workspace',
      'Baby seat', 'Air conditioning', 'Washer', 'Towels',
      'Dishwasher', 'Kitchen', 'Washing machine', 'Breakfast',
      'Coffee machine'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: '.././public/img/avatar-angelina.jpg'
    },
    isPremium: false,
    isFavorite: true,
    rating: 4.9,
    bedrooms: 2,
    maxAdults: 3
  },
  {
    id: 'p1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6',
    title: 'Elegant Parisian Studio',
    description: 'Charming studio in the heart of Paris with typical French decor and balcony',
    type: 'room',
    price: 150,
    images: [
      '.././public/img/apartment-01.jpg',
      '.././public/img/apartment-02.jpg',
      '.././public/img/apartment-03.jpg',
      '.././public/img/apartment-small-03.jpg',
      '.././public/img/apartment-small-04.jpg',
    ],
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.85750,
      longitude: 2.34921,
      zoom: 13
    },
    goods: [
      'Wi-Fi', 'Heating', 'Kitchenette', 'Coffee machine',
      'Towels', 'Workspace', 'Hair dryer'
    ],
    host: {
      isPro: true,
      name: 'Pierre',
      avatarUrl: '.././public/img/avatar-pierre.jpg'
    },
    isPremium: true,
    isFavorite: false,
    rating: 4.6,
    bedrooms: 1,
    maxAdults: 2
  },
  {
    id: 'p2b3c4d5-f6g7-8h9i-0j1k-l2m3n4o5p6q7',
    title: 'Louvre View Apartment',
    description: 'Luxury apartment with direct view to Louvre Museum and Eiffel Tower',
    type: 'apartment',
    price: 290,
    images: [
      '.././public/img/apartment-01.jpg',
      '.././public/img/apartment-02.jpg',
      '.././public/img/apartment-03.jpg',
      '.././public/img/apartment-small-03.jpg',
      '.././public/img/apartment-small-04.jpg',
    ],
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.85992,
      longitude: 2.34078,
      zoom: 13
    },
    goods: [
      'Wi-Fi', 'Heating', 'Air conditioning', 'Kitchen',
      'Dishwasher', 'Washing machine', 'TV', 'Elevator'
    ],
    host: {
      isPro: true,
      name: 'Claire',
      avatarUrl: '.././public/img/avatar-claire.jpg'
    },
    isPremium: true,
    isFavorite: true,
    rating: 4.8,
    bedrooms: 2,
    maxAdults: 4
  },
  {
    id: 'p3c4d5e6-f7g8-9h0i-1j2k-l3m4n5o6p7q8',
    title: 'Montmartre Artist Loft',
    description: 'Authentic artist loft in the creative Montmartre district',
    type: 'loft',
    price: 230,
    images: [
      '.././public/img/apartment-01.jpg',
      '.././public/img/apartment-02.jpg',
      '.././public/img/apartment-03.jpg',
      '.././public/img/apartment-small-03.jpg',
      '.././public/img/apartment-small-04.jpg',
    ],
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.88663,
      longitude: 2.34300,
      zoom: 13
    },
    goods: [
      'Wi-Fi', 'Heating', 'Kitchen', 'Workspace',
      'Coffee machine', 'Art supplies', 'Terrace'
    ],
    host: {
      isPro: false,
      name: 'Jacques',
      avatarUrl: '.././public/img/avatar-jacques.jpg'
    },
    isPremium: false,
    isFavorite: false,
    rating: 4.7,
    bedrooms: 1,
    maxAdults: 2
  },

  {
    id: "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6",
    title: "Cozy Apartment in the Heart of Cologne",
    description: "A charming apartment located in the historic center of Cologne. Perfect for couples or small families.",
    type: "apartment",
    price: 120,
    images: [
       '.././public/img/apartment-01.jpg',
      '.././public/img/apartment-02.jpg',
      '.././public/img/apartment-03.jpg',
      '.././public/img/apartment-small-03.jpg',
      '.././public/img/apartment-small-04.jpg',
    ],
    city: {
      name: "Cologne",
      location: {
        latitude: 50.937531,
        longitude: 6.960279,
        zoom: 12
      }
    },
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 12
    },
    goods: [
      "Wi-Fi", "Heating", "Kitchen", "Washing machine",
      "Towels", "Coffee machine", "Laptop friendly workspace"
    ],
    host: {
      isPro: true,
      name: "Michael",
      avatarUrl: ".././public/img/avatar-michael.jpg"
    },
    isPremium: true,
    isFavorite: false,
    rating: 4.7,
    bedrooms: 1,
    maxAdults: 2
  },
  {
    id: "c1d2e3f4-g5h6-7i8j-9k0l-m1n2o3p4q5r6",
    title: "Cathedral View Loft",
    description: "Industrial-style loft with panoramic view of Cologne Cathedral",
    type: "loft",
    price: 180,
    images: [
       '.././public/img/apartment-01.jpg',
      '.././public/img/apartment-02.jpg',
      '.././public/img/apartment-03.jpg',
      '.././public/img/apartment-small-03.jpg',
      '.././public/img/apartment-small-04.jpg',
    ],
    city: {
      name: "Cologne",
      location: {
        latitude: 50.937531,
        longitude: 6.960279,
        zoom: 12
      }
    },
    location: {
      latitude: 50.939842,
      longitude: 6.958321,
      zoom: 12
    },
    goods: [
      "Wi-Fi", "Heating", "Kitchen", "Workspace",
      "Coffee machine", "City view", "Elevator"
    ],
    host: {
      isPro: false,
      name: "Thomas",
      avatarUrl: ".././public/img/avatar-thomas.jpg"
    },
    isPremium: false,
    isFavorite: true,
    rating: 4.5,
    bedrooms: 1,
    maxAdults: 2
  },
  {
    id: "c2d3e4f5-g6h7-8i9j-0k1l-m2n3o4p5q6r7",
    title: "Riverside Apartment Cologne",
    description: "Modern apartment with Rhine river view and balcony",
    type: "apartment",
    price: 210,
    images: [
       '.././public/img/apartment-01.jpg',
      '.././public/img/apartment-02.jpg',
      '.././public/img/apartment-03.jpg',
      '.././public/img/apartment-small-03.jpg',
      '.././public/img/apartment-small-04.jpg',
    ],
    city: {
      name: "Cologne",
      location: {
        latitude: 50.937531,
        longitude: 6.960279,
        zoom: 12
      }
    },
    location: {
      latitude: 50.936123,
      longitude: 6.963456,
      zoom: 12
    },
    goods: [
      "Wi-Fi", "Heating", "Kitchen", "Balcony",
      "Coffee machine", "River view", "Washing machine"
    ],
    host: {
      isPro: true,
      name: "Sabine",
      avatarUrl: ".././public/img/avatar-sabine.jpg"
    },
    isPremium: true,
    isFavorite: false,
    rating: 4.4,
    bedrooms: 2,
    maxAdults: 3
  },
  {
    id: "",
    title: "Old Town Guesthouse",
    description: "Traditional guesthouse in Cologne's historic Old Town",
    type: "house",
    price: 170,
    images: [
       '.././public/img/apartment-01.jpg',
      '.././public/img/apartment-02.jpg',
      '.././public/img/apartment-03.jpg',
      '.././public/img/apartment-small-03.jpg',
      '.././public/img/apartment-small-04.jpg',
    ],
    city: {
      name: "Cologne",
      location: {
        latitude: 50.937531,
        longitude: 6.960279,
        zoom: 12
      }
    },
    location: {
      latitude: 50.935456,
      longitude: 6.957890,
      zoom: 12
    },
    goods: [
      "Wi-Fi", "Heating", "Kitchen", "Garden",
      "Breakfast included", "Historical building"
    ],
    host: {
      isPro: false,
      name: "Hans",
      avatarUrl: ".././public/img/avatar-hans.jpg"
    },
    isPremium: false,
    isFavorite: true,
    rating: 4.3,
    bedrooms: 3,
    maxAdults: 5
  },

  {
    id: "f6g7h8i9-j0k1-l2m3-n4o5-p6q7r8s9t0u1",
    title: "Modern Loft near Grand Place",
    description: "Spacious loft with modern design near the central square",
    type: "loft",
    price: 200,
    images: [
       '.././public/img/apartment-01.jpg',
      '.././public/img/apartment-02.jpg',
      '.././public/img/apartment-03.jpg',
      '.././public/img/apartment-small-03.jpg',
      '.././public/img/apartment-small-04.jpg',
    ],
    city: {
      name: "Brussels",
      location: {
        latitude: 50.850346,
        longitude: 4.351721,
        zoom: 13
      }
    },
    location: {
      latitude: 50.850169,
      longitude: 4.351695,
      zoom: 13
    },
    goods: ["Wi-Fi", "Kitchen", "TV", "Parking", "Air conditioning"],
    host: {
      isPro: false,
      name: "Sophie",
      avatarUrl: ".././public/img/avatar-sophie.jpg"
    },
    isPremium: false,
    isFavorite: true,
    rating: 4.5,
    bedrooms: 2,
    maxAdults: 3
  },
  {
    id: "b1c2d3e4-f5g6-7h8i-9j0k-l1m2n3o4p5q6",
    title: "EU District Studio",
    description: "Compact studio in the European Quarter, perfect for business travelers",
    type: "room",
    price: 110,
    images: [
       '.././public/img/apartment-01.jpg',
      '.././public/img/apartment-02.jpg',
      '.././public/img/apartment-03.jpg',
      '.././public/img/apartment-small-03.jpg',
      '.././public/img/apartment-small-04.jpg',
    ],
    city: {
      name: "Brussels",
      location: {
        latitude: 50.850346,
        longitude: 4.351721,
        zoom: 13
      }
    },
    location: {
      latitude: 50.851234,
      longitude: 4.353456,
      zoom: 13
    },
    goods: [
      "Wi-Fi", "Workspace", "Coffee machine",
      "Towels", "Hair dryer", "Iron"
    ],
    host: {
      isPro: true,
      name: "Jean",
      avatarUrl: ".././public/img/avatar-jean.jpg"
    },
    isPremium: false,
    isFavorite: false,
    rating: 4.2,
    bedrooms: 1,
    maxAdults: 1
  },
  {
    id: "b2c3d4e5-f6g7-8h9i-0j1k-l2m3n4o5p6q7",
    title: "Art Nouveau Apartment",
    description: "Beautifully restored Art Nouveau apartment with original details",
    type: "apartment",
    price: 240,
    images: [
       '.././public/img/apartment-01.jpg',
      '.././public/img/apartment-02.jpg',
      '.././public/img/apartment-03.jpg',
      '.././public/img/apartment-small-03.jpg',
      '.././public/img/apartment-small-04.jpg',
    ],
    city: {
      name: "Brussels",
      location: {
        latitude: 50.850346,
        longitude: 4.351721,
        zoom: 13
      }
    },
    location: {
      latitude: 50.848765,
      longitude: 4.350987,
      zoom: 13
    },
    goods: [
      "Wi-Fi", "Heating", "Kitchen", "Historical interior",
      "Coffee machine", "Art books", "Balcony"
    ],
    host: {
      isPro: true,
      name: "Elise",
      avatarUrl: ".././public/img/avatar-elise.jpg"
    },
    isPremium: true,
    isFavorite: true,
    rating: 4.7,
    bedrooms: 2,
    maxAdults: 3
  },
  {
    id: "b3c4d5e6-f7g8-9h0i-1j2k-l3m4n5o6p7q8",
    title: "Sablon District Penthouse",
    description: "Luxury penthouse in prestigious Sablon district with terrace",
    type: "apartment",
    price: 320,
    images: [
       '.././public/img/apartment-01.jpg',
      '.././public/img/apartment-02.jpg',
      '.././public/img/apartment-03.jpg',
      '.././public/img/apartment-small-03.jpg',
      '.././public/img/apartment-small-04.jpg',
    ],
    city: {
      name: "Brussels",
      location: {
        latitude: 50.850346,
        longitude: 4.351721,
        zoom: 13
      }
    },
    location: {
      latitude: 50.847654,
      longitude: 4.355678,
      zoom: 13
    },
    goods: [
      "Wi-Fi", "Heating", "Air conditioning", "Kitchen",
      "Terrace", "Jacuzzi", "City view", "Elevator"
    ],
    host: {
      isPro: true,
      name: "Philippe",
      avatarUrl: ".././public/img/avatar-philippe.jpg"
    },
    isPremium: true,
    isFavorite: false,
    rating: 4.8,
    bedrooms: 3,
    maxAdults: 4
  },

  {
    id: "c3d4e5f6-g7h8-9i0j-1k2l-m3n4o5p6q7r4",
    title: "Charming Canal House",
    description: "Traditional house with canal view in the historic district",
    type: "house",
    price: 300,
    images: [
       '.././public/img/apartment-01.jpg',
      '.././public/img/apartment-02.jpg',
      '.././public/img/apartment-03.jpg',
      '.././public/img/apartment-small-03.jpg',
      '.././public/img/apartment-small-04.jpg',
    ],
    city: {
      name: "Amsterdam",
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 14
      }
    },
    location: {
      latitude: 52.369543,
      longitude: 4.895123,
      zoom: 14
    },
    goods: [
      "Wi-Fi", "Heating", "Kitchen", "Washing machine",
      "Towels", "Coffee machine", "Bicycle rental"
    ],
    host: {
      isPro: true,
      name: "Emma",
      avatarUrl: ".././public/img/avatar-emma.jpg"
    },
    isPremium: true,
    isFavorite: true,
    rating: 4.9,
    bedrooms: 3,
    maxAdults: 5
  },
  {
    id: "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p7",
    title: "Jordaan District Apartment",
    description: "Cozy apartment in trendy Jordaan neighborhood with local shops",
    type: "apartment",
    price: 220,
    images: [
       '.././public/img/apartment-01.jpg',
      '.././public/img/apartment-02.jpg',
      '.././public/img/apartment-03.jpg',
      '.././public/img/apartment-small-03.jpg',
      '.././public/img/apartment-small-04.jpg',
    ],
    city: {
      name: "Amsterdam",
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 14
      }
    },
    location: {
      latitude: 52.371234,
      longitude: 4.893456,
      zoom: 14
    },
    goods: [
      "Wi-Fi", "Heating", "Kitchen", "Workspace",
      "Coffee machine", "Local guidebooks"
    ],
    host: {
      isPro: false,
      name: "Daan",
      avatarUrl: ".././public/img/avatar-daan.jpg"
    },
    isPremium: false,
    isFavorite: false,
    rating: 4.6,
    bedrooms: 1,
    maxAdults: 2
  },
  {
    id: "a2b3c4d5-e6f7-8g9h-0i1j-k2l3m4n5o6p7",
    title: "Museum Quarter Loft",
    description: "Stylish loft steps away from Rijksmuseum and Van Gogh Museum",
    type: "loft",
    price: 270,
    images: [
       '.././public/img/apartment-01.jpg',
      '.././public/img/apartment-02.jpg',
      '.././public/img/apartment-03.jpg',
      '.././public/img/apartment-small-03.jpg',
      '.././public/img/apartment-small-04.jpg',
    ],
    city: {
      name: "Amsterdam",
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 14
      }
    },
    location: {
      latitude: 52.368765,
      longitude: 4.890987,
      zoom: 14
    },
    goods: [
      "Wi-Fi", "Heating", "Kitchen", "Art books",
      "Coffee machine", "Museum passes"
    ],
    host: {
      isPro: true,
      name: "Femke",
      avatarUrl: ".././public/img/avatar-femke.jpg"
    },
    isPremium: true,
    isFavorite: true,
    rating: 4.8,
    bedrooms: 2,
    maxAdults: 3
  },
  {
    id: "a3b4c5d6-e7f8-9g0h-1i2j-k3l4m5n6o7p8",
    title: "De Pijp Cozy Room",
    description: "Comfortable room in vibrant De Pijp district with shared kitchen",
    type: "room",
    price: 130,
    images: [
       '.././public/img/apartment-01.jpg',
      '.././public/img/apartment-02.jpg',
      '.././public/img/apartment-03.jpg',
      '.././public/img/apartment-small-03.jpg',
      '.././public/img/apartment-small-04.jpg',
    ],
    city: {
      name: "Amsterdam",
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 14
      }
    },
    location: {
      latitude: 52.356789,
      longitude: 4.892345,
      zoom: 14
    },
    goods: [
      "Wi-Fi", "Shared kitchen", "Coffee machine",
      "Bicycle rental", "Local tips"
    ],
    host: {
      isPro: false,
      name: "Lucas",
      avatarUrl: ".././public/img/avatar-lucas.jpg"
    },
    isPremium: false,
    isFavorite: false,
    rating: 4.4,
    bedrooms: 1,
    maxAdults: 1
  },

  {
    id: "d4e5f6g7-h8i9-j0k1-l2m3-n4o5p6q7r8s9",
    title: "Luxury Penthouse with View",
    description: "Exclusive penthouse with panoramic city views",
    type: "apartment",
    price: 450,
    images: [
       '.././public/img/apartment-01.jpg',
      '.././public/img/apartment-02.jpg',
      '.././public/img/apartment-03.jpg',
      '.././public/img/apartment-small-03.jpg',
      '.././public/img/apartment-small-04.jpg',
    ],
    city: {
      name: "Hamburg",
      location: {
        latitude: 53.551086,
        longitude: 9.993682,
        zoom: 12
      }
    },
    location: {
      latitude: 53.550341,
      longitude: 9.992765,
      zoom: 12
    },
    goods: [
      "Wi-Fi", "Heating", "Kitchen", "Washing machine",
      "Towels", "Coffee machine", "TV", "Parking",
      "Air conditioning", "Jacuzzi"
    ],
    host: {
      isPro: true,
      name: "Oliver",
      avatarUrl: ".././public/img/avatar-oliver.jpg"
    },
    isPremium: true,
    isFavorite: false,
    rating: 4.8,
    bedrooms: 3,
    maxAdults: 4
  },
  {
    id: "h1i2j3k4-l5m6-n7o8-p9q0-r1s2t3u4v5w6",
    title: "HafenCity Apartment",
    description: "Modern apartment in Hamburg's futuristic HafenCity district",
    type: "apartment",
    price: 320,
    images: [
       '.././public/img/apartment-01.jpg',
      '.././public/img/apartment-02.jpg',
      '.././public/img/apartment-03.jpg',
      '.././public/img/apartment-small-03.jpg',
      '.././public/img/apartment-small-04.jpg',
    ],
    city: {
      name: "Hamburg",
      location: {
        latitude: 53.551086,
        longitude: 9.993682,
        zoom: 12
      }
    },
    location: {
      latitude: 53.552123,
      longitude: 9.995456,
      zoom: 12
    },
    goods: [
      "Wi-Fi", "Heating", "Kitchen", "Balcony",
      "Coffee machine", "Harbor view"
    ],
    host: {
      isPro: false,
      name: "Anna",
      avatarUrl: ".././public/img/avatar-anna.jpg"
    },
    isPremium: false,
    isFavorite: true,
    rating: 4.5,
    bedrooms: 2,
    maxAdults: 3
  },
  {
    id: "h2i3j4k5-l6m7-n8o9-p0q1-r2s3t4u5v6w7",
    title: "Alster Lake View House",
    description: "Charming house with direct view to Alster Lake",
    type: "house",
    price: 380,
    images: [
       '.././public/img/apartment-01.jpg',
      '.././public/img/apartment-02.jpg',
      '.././public/img/apartment-03.jpg',
      '.././public/img/apartment-small-03.jpg',
      '.././public/img/apartment-small-04.jpg',
    ],
    city: {
      name: "Hamburg",
      location: {
        latitude: 53.551086,
        longitude: 9.993682,
        zoom: 12
      }
    },
    location: {
      latitude: 53.548765,
      longitude: 9.990987,
      zoom: 12
    },
    goods: [
      "Wi-Fi", "Heating", "Kitchen", "Lake view",
      "Garden", "Boat rental available"
    ],
    host: {
      isPro: true,
      name: "Klaus",
      avatarUrl: ".././public/img/avatar-klaus.jpg"
    },
    isPremium: true,
    isFavorite: false,
    rating: 4.7,
    bedrooms: 4,
    maxAdults: 6
  },
  {
    id: "h3i4j5k6-l7m8-n9o0-p1q2-r3s4t5u6v7w8",
    title: "Sternschanze Studio",
    description: "Trendy studio in hip Sternschanze district with cafes and galleries",
    type: "room",
    price: 140,
    images: [
       '.././public/img/apartment-01.jpg',
      '.././public/img/apartment-02.jpg',
      '.././public/img/apartment-03.jpg',
      '.././public/img/apartment-small-03.jpg',
      '.././public/img/apartment-small-04.jpg',
    ],
    city: {
      name: "Hamburg",
      location: {
        latitude: 53.551086,
        longitude: 9.993682,
        zoom: 12
      }
    },
    location: {
      latitude: 53.562345,
      longitude: 9.978901,
      zoom: 12
    },
    goods: [
      "Wi-Fi", "Kitchenette", "Workspace",
      "Local guide", "Bicycle available"
    ],
    host: {
      isPro: false,
      name: "Lena",
      avatarUrl: ".././public/img/avatar-lena.jpg"
    },
    isPremium: false,
    isFavorite: true,
    rating: 4.3,
    bedrooms: 1,
    maxAdults: 2
  },


];

export { offers };