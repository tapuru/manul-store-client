import React from 'react';

import cl from "./AppForm.module.css";

interface Props {
  children?: React.ReactNode;
  header?: React.ReactNode
}
interface ActionsProps {
  children?: React.ReactNode;
}

export const AppForm = ({ children, header }: Props) => {
  return (
    <div>
      {!!header && 
        <div className={cl.formHeader}>
          {header}
        </div>
      }
      <form className={cl.form} >
        {children}
      </form>
    </div>
  )
}

interface ItemProps {
  children?: React.ReactNode;
}

AppForm.Item = ({ children }: ItemProps) => {

  const rootClassName = [cl.formItem];

  return (
    <div className={rootClassName.join(" ")}>
      {children}
    </div>
  )
}

AppForm.Actions = ({ children }: ActionsProps) => {
  return (
    <div className={cl.formActions}>
      {children}
    </div>
  )
}
