import React from "react";
import cl from "./Menu.module.css";
import { Divider } from "..";

interface IMenuItem {
  label: string;
  onClick: () => void;
}

interface MenuProps {
  header?: React.ReactNode;
  items?: IMenuItem[];
  children?: React.ReactNode;
  isOpen?: boolean;
}

export const Menu = ({ children, header, items, isOpen }: MenuProps) => {

  const rootClassName = [cl.menu];
  if (isOpen) rootClassName.push(cl._active);

  return (
    <div className={rootClassName.join(" ")}>
      {header && 
        <>
        <div className={cl.menuHeader}>
          {header}
        </div>
        <Divider />
        </>
      }
      {items && 
        <ul className={cl.menuList}>
          {items.map(item => (
            <li className={cl.menuItem} onClick={item.onClick}>
              {item.label}
            </li>
          ))}
        </ul>
      }
      {children}
    </div>
  )
}
