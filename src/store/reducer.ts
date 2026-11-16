import { Offer } from '../types';
import { offers as mockOffers } from '../mocks/offers';
import { Action, ActionType } from './action';

export type State = {
  city: string;
  offers: Offer[];
};

export const initialState: State = {
  city: 'Paris',
  offers: mockOffers,
};

export const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return { ...state, city: action.payload };
    case ActionType.LoadOffers:
      return { ...state, offers: action.payload };
    default:
      return state;
  }
};
