import { useState } from 'react'
import { HeaderButton } from './HeaderButton';
import cl from "../Header.module.css"
import { useNavigate } from 'react-router-dom';
import { BasketIcon, HeartIcon, ProfileIcon } from '../../../shared/components/icons';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { logOut, selectCurrentUser } from '../../../features/user/model/userSlice';
import { Menu } from '../../../shared/components/ui';

export const Navbar = () => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectCurrentUser);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  return (
    <nav className={cl.navbar}>
      <div className={cl.navbarItem}>
          <HeaderButton onClick={() => navigate("/favorites")} icon={<HeartIcon />}>
            избранное
          </HeaderButton>
        </div>
      <div className={cl.navbarItem}>
          <HeaderButton onClick={() => navigate("/basket")} icon={<BasketIcon />}>
            корзина
          </HeaderButton>
        </div>
      {user ?
        <div className={cl.navbarItem}>
          <HeaderButton onClick={() => setIsProfileMenuOpen(prev => !prev)} icon={<ProfileIcon />}>
            профиль
          </HeaderButton>
            <Menu 
              header={user.name}
              isOpen={isProfileMenuOpen} 
              items={[
                { label: "Профиль", onClick: () => navigate(`/profile/${user.id}`) },
                { label: "Выйти", onClick: () => dispatch(logOut()) },
              ]}
            />         
        </div>
        :
        <HeaderButton onClick={() => navigate("/login")} icon={<ProfileIcon />}>
          войти
        </HeaderButton>
      }
    </nav>
  )
}
