import MainPage from './pages/main/main-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login/login-page';
import FavoritesPage from './pages/favorites/favorites-page';
import OfferPage from './pages/offer/offer-page';
import NotFoundPage from './pages/not-found/not-found-page';
import PrivateRoute from './components/private-route/private-route';
import { AppRoute } from './routes';
import { Offer } from './types';

type AppProps = {
  offers: Offer[];
};

const AUTHORIZATION_STATUS = true;

export default function App({ offers }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage offers={offers} />} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AUTHORIZATION_STATUS}><FavoritesPage offers={offers}/></PrivateRoute>
          }
        />
        <Route path={`${AppRoute.Offer}/:id`} element={<OfferPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
