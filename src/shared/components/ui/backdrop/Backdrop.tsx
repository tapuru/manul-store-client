import React from "react";
import cl from "./Backdrop.module.css";

interface BackdropProps {
  isOpen: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const Backdrop = ({ isOpen, children, onClick }: BackdropProps) => {

  const rootClassName = [cl.wrapper];
  if (isOpen) rootClassName.push(cl._active);

  const handleBackdropClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onClick) onClick();
  }

  return (
    <div className={rootClassName.join(" ")} onClick={handleBackdropClick}>
      {children}
    </div>
  )
}
