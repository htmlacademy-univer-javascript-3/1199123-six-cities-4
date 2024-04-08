import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from '../../pages/Main/Main.tsx';
import { NotFoundPage } from '../../pages/NotFoundScreen/NotFoundScreen.tsx';
import { Offer } from '../../pages/Offer/Offer.tsx';
import { Login } from '../../pages/Login/Login.tsx';
import { Favourites } from '../../pages/Favourites/Favourites.tsx';
import { PrivateRoute } from '../private-route/private-route.tsx';
import { OfferType } from '../../types/offer.tsx';

type AppScreenProps = {
  placesToStay: number;
  offers: OfferType[];
}

function App({placesToStay, offers}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main placesToStay={placesToStay} offers={offers}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/favorites" element={<PrivateRoute><Favourites favouritesList={offers.filter((obj) => obj.isFavourites)}/></PrivateRoute>} />
        <Route path="offer/:id" element={<Offer offers={offers}/>}></Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
