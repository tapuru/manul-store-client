import React from 'react';
import cl from "./Container.module.css";

interface Props {
  children: React.ReactNode;
}

export const Container = ({ children }: Props) => {
  return (
    <div className={cl.container} >
      {children}
    </div>
  )
}
