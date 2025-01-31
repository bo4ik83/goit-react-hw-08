import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from '../../redux/auth/operations';
import Layout from '../../components/Layout/Layout';
import Home from '../../pages/Home';
import Registration from '../../pages/Registration';
import Login from '../../pages/Login';
import Contacts from '../../pages/Contacts';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import RestrictedRoute from '../../components/RestrictedRoute/RestrictedRoute';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Router>
      {' '}
      {/* Окружает весь компонент приложения */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute>
                <Registration />
              </RestrictedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute>
                <Login />
              </RestrictedRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
