export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type City = {
  name: string;
  location: Location;
};

export type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type AuthInfo = User & {
  email: string;
  token: string;
};

export type LoginData = {
  email: string;
  password: string;
};

export type OfferType = 'apartment' | 'room' | 'house' | 'hotel';

export type Offer = {
  id: string;
  title: string;
  type: OfferType;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  images: string[];
  bedrooms: number;
  maxAdults: number;
  goods: string[];
  host: User;
  description: string;
};

export type Review = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
};

export type NewReview = {
  comment: string;
  rating: number;
};
