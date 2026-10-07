import MainPage from './pages/main/main-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login/login-page';
import FavoritesPage from './pages/favorites/favorites-page';
import OfferPage from './pages/offer/offer-page';
import NotFoundPage from './pages/not-found/not-found-page';
import PrivateRoute from './components/private-route/private-route';

type AppProps = {
  placesCount: number;
};

const AUTHORIZATION_STATUS = false;

function App({ placesCount }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage placesCount={placesCount} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/favorites"
          element={
            <PrivateRoute authorizationStatus={AUTHORIZATION_STATUS}><FavoritesPage/></PrivateRoute>
          }
        />
        <Route path="/offer/:id" element={<OfferPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
