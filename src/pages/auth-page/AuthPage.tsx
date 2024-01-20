import cl from "./AuthPage.module.css";
import { Section } from '../../shared/components/ui';
import { useLocation } from 'react-router-dom';
import { LoginForm, RegistrationForm } from "../../features/user";

export const AuthPage = () => {

  const location = useLocation();
  const isLogin = location.pathname === "/login";

  return (
    <div style={{ height: window.innerHeight - 80 }} >
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
  )
}
