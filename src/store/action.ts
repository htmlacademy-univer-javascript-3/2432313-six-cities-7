import { Offer } from '../types';
import { offers as mockOffers } from '../mocks/offers';

export enum ActionType {
  ChangeCity = 'changeCity',
  LoadOffers = 'loadOffers',
}

export type ChangeCityAction = {
  type: ActionType.ChangeCity;
  payload: string;
};

export type LoadOffersAction = {
  type: ActionType.LoadOffers;
  payload: Offer[];
};

export type Action = ChangeCityAction | LoadOffersAction;

export const changeCity = (city: string): ChangeCityAction => ({
  type: ActionType.ChangeCity,
  payload: city,
});

export const loadOffers = (): LoadOffersAction => ({
  type: ActionType.LoadOffers,
  payload: mockOffers,
});
