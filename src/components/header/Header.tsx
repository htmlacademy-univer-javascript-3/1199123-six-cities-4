import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks';
import Spinner from '../../pages/LoadingScreen/LoadingScreen';
import { AuthorizationStatus } from '../../const';
import { logoutAction } from '../../api/api-action';
import { updateLogin } from '../../store/action';

export function Header(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isUserDataLoading = useAppSelector((state) => state.isUserDataLoading);
  const userLogin = useAppSelector((state) => state.userLogin);

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
  switch (authorizationStatus) {
    case AuthorizationStatus.AUTHORIZED:
      loginManagement = (
        <li className="header__nav-item">
          <a className="header__nav-link" href="/login" onClick={handleLogout}>
            <span className="header__signout">Sign out</span>
          </a>
        </li>
      );
      userInformation = (
        <a className="header__nav-link header__nav-link--profile" href="#">
          <div className="header__avatar-wrapper user__avatar-wrapper"></div>
          <span className="header__user-name user__name">{userLogin}</span>
          <span className="header__favorite-count">3</span>
        </a>
      );
      break;
    default:
      loginManagement = (
        <li className="header__nav-item">
          <a className="header__nav-link" href="/login">
            <span className="header__signout">Sign in</span>
          </a>
        </li>
      );
      userInformation = (
        <li className="header__nav-item user">
          <a className="header__nav-link header__nav-link--profile" href="#"></a>
        </li>
      );
      break;
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to='/' className="header__logo-link">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
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
