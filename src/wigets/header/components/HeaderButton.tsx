import React from "react";
import cl from "../Header.module.css";

interface HeaderButtonProps {
  children?: React.ReactNode;
  styles?: React.CSSProperties;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const HeaderButton = ({ children, styles, onClick, icon }: HeaderButtonProps) => {

  return (
    <button className={cl.headerButton} style={styles} onClick={onClick}>
      {icon}
      {children}
    </button>
  )
}