import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from '../../pages/main/Main';
import { NotFoundPage } from '../../pages/not-found-screen/not-found-screen';
import { Offer } from '../../pages/offer/Offer';
import { Login } from '../../pages/login/Login';
import { Favourites } from '../../pages/favourites/Favourites';
import { PrivateRoute } from '../private-route/private-route';
import { useAppSelector } from '../hooks/index.ts';
import Spinner from '../../pages/loading-screen/loading-screen';


export function App(): JSX.Element {
  const isLoading = useAppSelector((state) => state.offer.isLoading);
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
        <Route path="/favorites" element={<PrivateRoute><Favourites /></PrivateRoute>} />
        <Route path="/offer/:id" element={<Offer offers={cityOffers}/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
