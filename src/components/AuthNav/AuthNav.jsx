import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register" className={s.authButton}>
        Register
      </NavLink>
      <NavLink to="/login" className={s.authButton}>
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
