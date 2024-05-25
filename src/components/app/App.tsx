import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from '../../pages/main/main.tsx';
import { NotFoundPage } from '../../pages/not-found-screen/not-found-screen.tsx';
import { Offer } from '../../pages/offer/offer.tsx';
import { Login } from '../../pages/login/login.tsx';
import { Favourites } from '../../pages/favourites/favourites.tsx';
import { PrivateRoute } from '../private-route/private-route.tsx';
import { useAppSelector } from '../hooks/index.ts';
import Spinner from '../../pages/loading-screen/loading-screen.tsx';


function App(): JSX.Element {
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

export default App;
