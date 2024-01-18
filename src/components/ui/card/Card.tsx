import React from 'react';
import cl from "./Card.module.css";
import { AppText } from '..';

interface CardProps {
  children?: React.ReactNode;
  title?: string;
}
interface ContentProps {
  children?: React.ReactNode;
}

export const Card = ({ children, title }: CardProps) => {
  return (
    <div className={cl.card} >
      {title && 
        <div className={cl.header}>
          <AppText variant='h3'>{title}</AppText>
        </div>
      }
      {children}
    </div>
  )
}

Card.Content = ({ children }: ContentProps) => {
  return (
    <div className={cl.content}>
      {children}
    </div>
  )
}