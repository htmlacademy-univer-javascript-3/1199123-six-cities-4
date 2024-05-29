import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from '../main/Main.tsx';
import { NotFoundPage } from '../not-found-screen/not-found-screen.tsx';
import { Offer } from '../offer/Offer.tsx';
import { Login } from '../login/Login.tsx';
import { Favourites } from '../favourites/Favourites.tsx';
import { PrivateRoute } from '../../components/private-route/private-route.tsx';
import { useAppSelector } from '../../components/hooks/index.ts';
import Spinner from '../loading-screen/loading-screen.tsx';


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
