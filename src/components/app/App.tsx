import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from '../../pages/Main/Main.tsx';
import { NotFoundPage } from '../../pages/NotFoundScreen/NotFoundScreen.tsx';
import { Offer } from '../../pages/Offer/Offer.tsx';
import { Login } from '../../pages/Login/Login.tsx';
import { Favourites } from '../../pages/Favourites/Favourites.tsx';
import { PrivateRoute } from '../private-route/private-route.tsx';
import { useAppSelector } from '../hooks/index.ts';
import Spinner from '../../pages/LoadingScreen/LoadingScreen.tsx';


function App(): JSX.Element {
  const isLoading = useAppSelector((state) => state.offer.isLoading);
  const offers = useAppSelector((state) => state.offer.offers);
  const cityOffers = useAppSelector((state) => state.offer.cityOffers);

  if (isLoading) {
    return (
      <Spinner />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favorite" element={<PrivateRoute><Favourites favouritesList={offers.filter((obj) => obj.isFavorite)}/></PrivateRoute>} />
        <Route path="/offer/:id" element={<Offer offers={cityOffers}/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
