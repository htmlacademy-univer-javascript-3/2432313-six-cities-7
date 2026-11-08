import { Review } from '../types';

export const reviews: Review[] = [
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Max',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false,
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    rating: 4,
  },
  {
    id: 'c78eege6-c064-5b41-9d9e-ce194de7c73b',
    date: '2019-06-15T10:22:31.123Z',
    user: {
      name: 'Oliver Conner',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true,
    },
    comment: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    rating: 5,
  },
];
