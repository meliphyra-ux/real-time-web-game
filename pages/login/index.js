import Head from 'next/head';
import AuthenticationForm from '../../components/authentication-form/Authentication-form.component';

import {
  signUpUserWithEmail,
  signInUserWithEmail,
} from '../../lib/supabaseClient';

import styles from '../../styles/Login.styles.module.scss';

const Login = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className={styles.authenticationPageContainer}>
        <div className={styles.authenticationTitle}>
          <h1>Choose your authentication method</h1>
          <span>Choose your authentication method</span>
        </div>
        <div className={styles.authenticationContainer}>
          <AuthenticationForm text="Sign up" operation={signUpUserWithEmail} redirect="/create-character"/>
          <AuthenticationForm text="Sign in" operation={signInUserWithEmail} redirect="/user"/>
        </div>
      </div>
    </>
  );
};

export default Login;
