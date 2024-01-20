import React from 'react';
import cl from "./TextInput.module.css";

interface Props extends React.ComponentPropsWithoutRef < "input" > {
  icon?: React.ReactNode;
  onIconClick?: () => void;
  variant?: "basic" | "filled";
  required?: boolean;
  isError?: boolean;
  errorMessage?: string | null;
}

export const TextInput = ({ icon, onIconClick, variant, required, isError, errorMessage, ...rest }: Props) => {

  const rootClassName = [cl.wrapper];

  if (variant) rootClassName.push({ basic: cl.wrapper_basic, filled: cl.wrapper_filled }[variant]);
  if (required) {
    rootClassName.push(cl._required);
    if (isError) rootClassName.push(cl._error);
  }

  return (
    <div>
      <div className={rootClassName.join(" ")} >
        <input className={cl.input} {...rest} />
        {icon && <button className={cl.button} onClick={onIconClick}>{icon}</button>}
      </div>
      {isError ? <p className={cl.error} >{errorMessage}</p> : null}
    </div>
  )
}
