import React from 'react';
import cl from "./Loader.module.css";

interface LoaderProps {
  centered?: boolean;
}

export const Loader = ({ centered }: LoaderProps) => {


  if (centered) {
    return (
      <div className={cl.wrapper}>
        <div className={cl.loader}></div>
      </div>
    )
  }

  return (
    <div className={cl.loader}></div>
  )
}

