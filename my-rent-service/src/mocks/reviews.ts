import  {Review} from '../types/review';



export const reviews: Review[] = [
  {
    'id': '1',
    'comment': 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam.',
    'date': '2023-10-01',
    'rating': 4,
    'user': {
      'name': 'John Doe',
      'avatarUrl': '.././public/img/avatar-angelina.jpg',
      'isPro': true,
    },
  },
  {
    'id': '2',
    'comment': 'The building is green and from 18th century.',
    'date': '2023-09-15',
    'rating': 5,
    'user': {
      'name': 'Jane Smith',
      'avatarUrl': '.././public/img/avatar-angelina.jpg',
      'isPro': false,
    },
  },
  {
    'id': '3',
    'comment': 'Perfect location, great view, and friendly staff.',
    'date': '2023-08-20',
    'rating': 4.5,
    'user': {
      'name': 'Alice Johnson',
      'avatarUrl': '.././public/img/avatar-angelina.jpg',
      'isPro': true,
    },
  },
];