export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
}

export const getOfferRoute = (id: string | number): string => `/offer/${id}`;
