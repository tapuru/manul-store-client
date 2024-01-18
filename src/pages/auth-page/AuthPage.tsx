import React from 'react'
import { Layout } from '../../components/ui/layout/Layout'
import { Header } from '../../modules/header'
import { LoginForm } from './components/login-form/LoginForm';
import cl from "./AuthPage.module.css";
import { Section } from '../../components/ui';
import { useLocation } from 'react-router-dom';
import { RegistrationForm } from './components/registration-form/RegistrationForm';

export const AuthPage = () => {

  const location = useLocation();
  const isLogin = location.pathname === "/login";

  return (
    <Layout
      header={<Header />}
    >
      <div style={{height: window.innerHeight - 80}} >
        <Section>
          <div className={cl.wrapper}>
            <div className={cl.authPicture} >
              <img src="src/assets/auth_page_picture.png" alt="auth_page_picture.png" />
            </div>
            <div className={cl.fromSection}>
              {isLogin ? (
                <LoginForm />
              ) : (
                <RegistrationForm />
              )}
            </div>
          </div>
        </Section>
      </div>
    </Layout>
  )
}
