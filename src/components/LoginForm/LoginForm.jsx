import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { login } from '../../redux/auth/operations';
import { Link } from 'react-router-dom';
import s from './LoginForm.module.css';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'At least 6 characters').required('Required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const loginError = useSelector(state => state.auth.error);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s.form}>
        <label className={s.label}>
          Email:
          <Field className={s.input} type="email" name="email" />
          <ErrorMessage className={s.error} name="email" component="div" />
        </label>
        <label className={s.label}>
          Password:
          <Field className={s.input} type="password" name="password" />
          <ErrorMessage className={s.error} name="password" component="div" />
        </label>
        <button className={s.button} type="submit">
          Log In
        </button>
        {loginError && <p className={s.error}>Error: {loginError}</p>}
        <p className={s.link}>
          No account yet? <Link to="/register">Sign up here</Link>.
        </p>
      </Form>
    </Formik>
  );
};

export default LoginForm;
