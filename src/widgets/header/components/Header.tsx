import cl from "../Header.module.css";
import { HeaderSearch } from './HeaderSearch';
import { Navbar } from './Navbar';
import { Button, Container } from '../../../shared/components/ui';
import { useNavigate } from "react-router-dom";
import { CatalogSidebar } from "../../../features/catalog";
import { useState } from "react";

export const Header = () => {

  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleCatalogButtonClick = () => {
    setIsSidebarOpen(prev => !prev);
  }

  return (
    <>
      <div className={cl.header} >
        <Container>
          <div className={cl.headerWrapper}>
            <div className={cl.headerLeft} >
              <div onClick={() => navigate("/")} className={cl.headerLogo}>
                LOGO
              </div>
              <Button
                variant='outlined'
                onClick={handleCatalogButtonClick}
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
      <div className={cl.catalogSidebar}>
        <CatalogSidebar isOpen={isSidebarOpen} onBackdropClick={() => setIsSidebarOpen(false)} />
      </div>
    </>
  )
}
