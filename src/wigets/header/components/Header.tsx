import cl from "../Header.module.css";
import { HeaderSearch } from './HeaderSearch';
import { Navbar } from './Navbar';
import { Button, Container } from '../../../shared/components/ui';
import { useNavigate } from "react-router-dom";

export const Header = () => {

  const navigate = useNavigate();

  return (
    <div className={cl.header} >
      <Container>
        <div className={cl.headerWrapper}>
          <div className={cl.headerLeft} >
            <div onClick={() => navigate("/")} className={cl.headerLogo}>
              LOGO
            </div>
            <Button
              variant='outlined'
            >
              Каталог
            </Button>
          </div>
          <div className={cl.headerContent}>
            <HeaderSearch />
            <Navbar />
          </div>
        </div>
      </Container>
    </div>
  )
}
