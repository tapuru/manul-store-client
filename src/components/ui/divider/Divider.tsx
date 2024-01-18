import React from 'react';
import cl from "./Divider.module.css";

interface DividerProps {
  variant?: "horizontal" | "vertical"
}

export const Divider = ({ variant }: DividerProps) => {

  if (variant === 'vertical') {
    return (
      <div className={cl.dividerVertical}></div>
    )
  }

  return (
    <div className={cl.divider}></div>
  )
}
