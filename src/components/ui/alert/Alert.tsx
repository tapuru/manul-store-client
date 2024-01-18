import React from "react";
import cl from "./Alert.module.css";

interface AlertProps {
  variant?: "success" | "error" | "warning";
  children?: React.ReactNode;
  message?: string
}

export const Alert = ({ variant, children, message }: AlertProps) => {

  const rootClassName = [cl.wrapper];
  if (variant) rootClassName.push({ success: cl.success, error: cl.error, warning: cl.warning }[variant]);

  return (
    <div className={rootClassName.join(" ")}>
      {message && <p>{message}</p>}
      {children}
    </div>
  )

}