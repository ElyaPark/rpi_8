import { OffersList } from "../types/offer";

export const offersList: OffersList[] = [
  // Paris (4 предложения)
  {
    id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
    title: 'Wood and stone place',
    type: 'apartment',
    price: 370,
    previewImage: '.././public/img/apartment-01.jpg',
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
    isFavorite: true,
    isPremium: false,
    rating: 4.9,
  },
  {
    id: 'p1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6',
    title: 'Elegant Parisian Studio',
    type: 'room',
    price: 150,
    previewImage: '.././public/img/apartment-02.jpg',
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
    isFavorite: false,
    isPremium: true,
    rating: 4.6,
  },
  {
    id: 'p2b3c4d5-f6g7-8h9i-0j1k-l2m3n4o5p6q7',
    title: 'Louvre View Apartment',
    type: 'apartment',
    price: 290,
    previewImage: '.././public/img/apartment-03.jpg',
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
    isFavorite: true,
    isPremium: true,
    rating: 4.8,
  },
  {
    id: 'p3c4d5e6-f7g8-9h0i-1j2k-l3m4n5o6p7q8',
    title: 'Montmartre Artist Loft',
    type: 'loft',
    price: 230,
    previewImage: '.././public/img/apartment-small-03.jpg',
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
    isFavorite: false,
    isPremium: false,
    rating: 4.7,
  },

  // Cologne (4 предложения)
  {
    id: "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6",
    title: "Cozy Apartment in the Heart of Cologne",
    type: "apartment",
    price: 120,
    previewImage: '.././public/img/apartment-small-04.jpg',
    city: {
      name: "Cologne",
      location: {
        latitude: 50.937531,
        longitude: 6.960279,
        zoom: 13
      }
    },
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.7,
  },
  {
    id: "c1d2e3f4-g5h6-7i8j-9k0l-m1n2o3p4q5r6",
    title: "Cathedral View Loft",
    type: "loft",
    price: 180,
    previewImage: '.././public/img/apartment-small-04.jpg',
    city: {
      name: "Cologne",
      location: {
        latitude: 50.937531,
        longitude: 6.960279,
        zoom: 13
      }
    },
    location: {
      latitude: 50.939842,
      longitude: 6.958321,
      zoom: 13
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.5,
  },
  {
    id: "c2d3e4f5-g6h7-8i9j-0k1l-m2n3o4p5q6r7",
    title: "Riverside Apartment Cologne",
    type: "apartment",
    price: 210,
    previewImage: '.././public/img/apartment-01.jpg',
    city: {
      name: "Cologne",
      location: {
        latitude: 50.937531,
        longitude: 6.960279,
        zoom: 13
      }
    },
    location: {
      latitude: 50.936123,
      longitude: 6.963456,
      zoom: 13
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.4,
  },
  {
    id: "c3d4e5f6-g7h8-9i0j-1k2l-m3n4o5p6q7r8",
    title: "Old Town Guesthouse",
    type: "house",
    price: 170,
    previewImage: '.././public/img/apartment-02.jpg',
    city: {
      name: "Cologne",
      location: {
        latitude: 50.937531,
        longitude: 6.960279,
        zoom: 13
      }
    },
    location: {
      latitude: 50.935456,
      longitude: 6.957890,
      zoom: 13
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.3,
  },

  // Brussels (4 предложения)
  {
    id: "f6g7h8i9-j0k1-l2m3-n4o5-p6q7r8s9t0u1",
    title: "Modern Loft near Grand Place",
    type: "loft",
    price: 200,
    previewImage: '.././public/img/apartment-03.jpg',
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
    isFavorite: true,
    isPremium: false,
    rating: 4.5,
  },
  {
    id: "b1c2d3e4-f5g6-7h8i-9j0k-l1m2n3o4p5q6",
    title: "EU District Studio",
    type: "room",
    price: 110,
    previewImage: '.././public/img/apartment-small-03.jpg',
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
    isFavorite: false,
    isPremium: false,
    rating: 4.2,
  },
  {
    id: "b2c3d4e5-f6g7-8h9i-0j1k-l2m3n4o5p6q7",
    title: "Art Nouveau Apartment",
    type: "apartment",
    price: 240,
    previewImage: '.././public/img/apartment-small-03.jpg',
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
    isFavorite: true,
    isPremium: true,
    rating: 4.7,
  },
  {
    id: "b3c4d5e6-f7g8-9h0i-1j2k-l3m4n5o6p7q8",
    title: "Sablon District Penthouse",
    type: "apartment",
    price: 320,
    previewImage: '.././public/img/apartment-small-04.jpg',
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
    isFavorite: false,
    isPremium: true,
    rating: 4.8,
  },

  {
    id: "c3d4e5f6-g7h8-9i0j-1k2l-m3n4o5p6q7r4",
    title: "Charming Canal House",
    type: "house",
    price: 300,
    previewImage: '.././public/img/apartment-03.jpg',
    city: {
      name: "Amsterdam",
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 13
      }
    },
    location: {
      latitude: 52.369543,
      longitude: 4.895123,
      zoom: 13
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.9,
  },
  {
    id: "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p7",
    title: "Jordaan District Apartment",
    type: "apartment",
    price: 220,
    previewImage: '.././public/img/apartment-01.jpg',
    city: {
      name: "Amsterdam",
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 13
      }
    },
    location: {
      latitude: 52.371234,
      longitude: 4.893456,
      zoom: 13
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.6,
  },
  {
    id: "a2b3c4d5-e6f7-8g9h-0i1j-k2l3m4n5o6p7",
    title: "Museum Quarter Loft",
    type: "loft",
    price: 270,
    previewImage: '.././public/img/apartment-02.jpg',
    city: {
      name: "Amsterdam",
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 13
      }
    },
    location: {
      latitude: 52.368765,
      longitude: 4.890987,
      zoom: 13
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.8,
  },
  {
    id: "a3b4c5d6-e7f8-9g0h-1i2j-k3l4m5n6o7p8",
    title: "De Pijp Cozy Room",
    type: "room",
    price: 130,
    previewImage: '.././public/img/apartment-03.jpg',
    city: {
      name: "Amsterdam",
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 13
      }
    },
    location: {
      latitude: 52.356789,
      longitude: 4.892345,
      zoom: 13
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.4,
  },

  // Hamburg (4 предложения)
  {
    id: "d4e5f6g7-h8i9-j0k1-l2m3-n4o5p6q7r8s9",
    title: "Luxury Penthouse with View",
    type: "apartment",
    price: 450,
    previewImage: '.././public/img/apartment-small-03.jpg',
    city: {
      name: "Hamburg",
      location: {
        latitude: 53.551086,
        longitude: 9.993682,
        zoom: 13
      }
    },
    location: {
      latitude: 53.550341,
      longitude: 9.992765,
      zoom: 13
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.8,
  },
  {
    id: "h1i2j3k4-l5m6-n7o8-p9q0-r1s2t3u4v5w6",
    title: "HafenCity Apartment",
    type: "apartment",
    price: 320,
    previewImage: '.././public/img/apartment-small-04.jpg',
    city: {
      name: "Hamburg",
      location: {
        latitude: 53.551086,
        longitude: 9.993682,
        zoom: 13
      }
    },
    location: {
      latitude: 53.552123,
      longitude: 9.995456,
      zoom: 13
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.5,
  },
  {
    id: "h2i3j4k5-l6m7-n8o9-p0q1-r2s3t4u5v6w7",
    title: "Alster Lake View House",
    type: "house",
    price: 380,
    previewImage: '.././public/img/apartment-03.jpg',
    city: {
      name: "Hamburg",
      location: {
        latitude: 53.551086,
        longitude: 9.993682,
        zoom: 13
      }
    },
    location: {
      latitude: 53.548765,
      longitude: 9.990987,
      zoom: 13
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.7,
  },
  {
    id: "h3i4j5k6-l7m8-n9o0-p1q2-r3s4t5u6v7w8",
    title: "Sternschanze Studio",
    type: "room",
    price: 140,
    previewImage: '.././public/img/apartment-02.jpg',
    city: {
      name: "Hamburg",
      location: {
        latitude: 53.551086,
        longitude: 9.993682,
        zoom: 13
      }
    },
    location: {
      latitude: 53.562345,
      longitude: 9.978901,
      zoom: 13
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.3,
  },

];