import { Link } from 'react-router-dom';
import { AppRoute } from '../../routes';
import { useState } from 'react';
import OffersList from '../../components/offers-list/offers-list';
import { Offer } from '../../types';
import Map from '../../components/map/map';
import { State } from '../../store/reducer';
import CitiesList from '../../components/cities-list/cities-list';
import { useSelector, useDispatch } from 'react-redux';
import { changeCity } from '../../store/action';

function MainPage(): JSX.Element {
  const dispatch = useDispatch();
  const city = useSelector((state: State) => state.city);
  const allOffers = useSelector((state: State) => state.offers);

  const filteredOffers = allOffers.filter(
    (offer) => offer.city.name === city
  );

  const [activeOffer, setActiveOffer] = useState<Offer | null>(null);
  void activeOffer;

  const handleCardMouseEnter = (offer: Offer) => {
    setActiveOffer(offer);
  };

  const handleCardMouseLeave = () => {
    setActiveOffer(null);
  };

  const handleCityChange = (newCity: string) => {
    dispatch(changeCity(newCity));
  };

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link header__logo-link--active" to={AppRoute.Main}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to={AppRoute.Login}>
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <CitiesList
          currentCity={city}
          onCityChange={handleCityChange}
        />

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{filteredOffers.length} places to stay in {city}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>

              <OffersList
                offers={filteredOffers}
                onCardMouseEnter={handleCardMouseEnter}
                onCardMouseLeave={handleCardMouseLeave}
              />

            </section>
            <div className="cities__right-section">
              <Map
                offers={filteredOffers}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
