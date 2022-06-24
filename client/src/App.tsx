import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Article from './components/article/Article';
import Login from './components/auth/Login';
import PrivateRoute from './components/auth/PrivateRoute';
import Register from './components/auth/Register';
import Pickup from './components/dashboard/pickup/Pickup';
import RentLog from './components/dashboard/rentlog/RentLog';
import Return from './components/dashboard/return/Return';
import Summary from './components/dashboard/summary/Summary';
import Tool from './components/dashboard/tool/Tool';
import Landing from './components/landing/Landing';
import NotFound from './components/NotFound';
import Project from './components/project/Project';
import Rent from './components/rent/Rent';
import Shop from './components/shop/Shop';

const App = (): JSX.Element => {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/project" element={<Project />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/article" element={<Article />} />
          <Route path="/admin/" element={<Login />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/register" element={<Register />} />
          <Route path="/admin/summary" element={<Summary />} />
          <Route path="/admin/pickup" element={<Pickup />} />
          <Route path="/admin/return" element={<Return />} />
          <Route path="/admin/log" element={<RentLog />} />
          <Route path="/admin/tool" element={<Tool />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default App;
