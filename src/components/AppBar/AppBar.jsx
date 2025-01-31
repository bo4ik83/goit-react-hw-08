import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import s from '../AppBar/AppBar.module.css';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={s.header}>
      <div className={s.left}>
        <Navigation />
      </div>
      <div className={s.right}>{isLoggedIn ? <UserMenu /> : <AuthNav />}</div>
    </header>
  );
};

export default AppBar;
