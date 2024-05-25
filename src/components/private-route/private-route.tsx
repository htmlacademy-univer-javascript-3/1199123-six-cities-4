import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks';
import { AuthorizationStatus } from '../../const';

type PrivateRouteProps = {
  children: JSX.Element;
}

export function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.user.authorizationStatus);
  return authorizationStatus === AuthorizationStatus.Authorized ? children : <Navigate to="/login" />;
}
