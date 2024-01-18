import React from 'react';
import cl from "./List.module.css";

interface ListItem {
  label: string;
}

interface ListItemProps extends React.ComponentPropsWithoutRef<"button"> {
  label: string;
}


export const ListItemButton = ({ label, ...props }: ListItemProps) => {
  return (
    <button className={cl.listItem} {...props}>
      {label}
    </button>
  )
}

interface ListProps extends React.ComponentPropsWithoutRef<"button"> {
  items?: ListItem[];
  label?: string;
  clickableLabel?: boolean;
  children?: React.ReactNode;
}

export const List = ({ children, label, clickableLabel, ...props }: ListProps) => {

  return (
    <div className={cl.wrapper} >
      {label &&
        clickableLabel ? (
          <button className={`${cl.labelButton} ${cl.label}`} {...props}>{label}</button>
        ) : (
          <div className={cl.label}>{label}</div>
        )
      }
      <div className={cl.items}>
        {children}
      </div>
    </div>
  )
}
