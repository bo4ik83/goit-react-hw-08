import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { refreshUser } from '../../redux/auth/operations';
import Layout from '../../components/Layout/Layout';
import Home from '../../pages/Home';
import Registration from '../../pages/Registration';
import Login from '../../pages/Login';
import Contacts from '../../pages/Contacts';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import RestrictedRoute from '../../components/RestrictedRoute/RestrictedRoute';
import NotFound from '../../pages/NotFound';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <p>Refreshing user...</p>; // Можно добавить анимацию загрузки
  }

  return (
    <>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="register"
            element={
              <RestrictedRoute>
                <Registration />
              </RestrictedRoute>
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute>
                <Login />
              </RestrictedRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
