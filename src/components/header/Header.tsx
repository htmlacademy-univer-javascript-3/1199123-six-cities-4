import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks';
import Spinner from '../../pages/loading-screen/loading-screen';
import { AuthorizationStatus } from '../../const';
import { logoutAction } from '../../api/api-action';
import { updateLogin } from '../../store/actions/user-actions';

export function Header(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.user.authorizationStatus);
  const isUserDataLoading = useAppSelector((state) => state.user.isUserDataLoading);
  const favoritesCount = useAppSelector((state) => state.favorites.favoritesCount);
  const userLogin = useAppSelector((state) => state.user.userLogin);

  const dispatch = useAppDispatch();

  const handleLogout = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
    dispatch(updateLogin(null));
  };

  if (isUserDataLoading) {
    return <Spinner/>;
  }


  let loginManagement;
  let userInformation;
  if (authorizationStatus === AuthorizationStatus.Authorized) {
    loginManagement = (
      <li className="header__nav-item">
        <a href='/' className="header__nav-link" onClick={handleLogout}>
          <span className="header__signout">Sign out</span>
        </a>
      </li>
    );
    userInformation = (
      <Link to='/favorites' className="header__nav-link header__nav-link--profile">
        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
        <span className="header__user-name user__name">{userLogin}</span>
        <span className="header__favorite-count">{favoritesCount}</span>
      </Link>
    );
  } else {
    loginManagement = (
      <li className="header__nav-item">
        <a href="/login" className="header__nav-link">
          <span className="header__signout">Sign in</span>
        </a>
      </li>
    );
    userInformation = (
      <Link to="/" className="header__nav-link header__nav-link--profile"></Link>
    );
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link" href='/'>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {userInformation}
              </li>
              {loginManagement}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
