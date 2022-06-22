import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const PrivateRoute = ({
  path,
  element,
}: {
  path: string;
  element: JSX.Element;
}) => {
  return <Route path={path} element={element} />;
};

export default PrivateRoute;
