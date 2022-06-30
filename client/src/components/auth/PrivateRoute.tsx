import { Navigate } from "react-router-dom";
import { Admin } from "../rent/rent.types";

const PrivateRoute = ({
  element: Element,
  admin
}: PrivateRouteProps): JSX.Element => {

  return (
    <>
      {!admin ?
        <Element /> :
        <Navigate to="/admin/login" />
      }
    </>
  );
};

interface PrivateRouteProps {
  element: () => JSX.Element;
  admin: Admin | null;
}

export default PrivateRoute;