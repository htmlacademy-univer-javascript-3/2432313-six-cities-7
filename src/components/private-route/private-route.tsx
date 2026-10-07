import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  authorizationStatus: boolean;
  children: JSX.Element;
};

function PrivateRoute({authorizationStatus, children}: PrivateRouteProps): JSX.Element {
  return authorizationStatus ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
