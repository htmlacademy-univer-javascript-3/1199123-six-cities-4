import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  children: JSX.Element;
}

export function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const isAuthorized = false;
  return isAuthorized ? children : <Navigate to="/login" />;
}
