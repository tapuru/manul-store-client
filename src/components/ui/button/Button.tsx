import React, { CSSProperties, ReactNode } from "react";
import cl from "./Button.module.css";

interface Props extends React.ComponentPropsWithoutRef<"button"> {
  children?: ReactNode;
  size?: "sm" | "md" | "lg";
  styles?: CSSProperties;
  variant?: "filled" | "outlined" | "arrow";
  className?: string;
}

export const Button = ({ children, size = "md", variant = "filled", styles, onClick, className  }: Props) => {

  const rootClassName = [cl.button, className];

  switch (variant) {
    case "filled": 
      rootClassName.push(cl.button_filled); 
      break;
    case "outlined": 
      rootClassName.push(cl.button_outlined); 
      break;
  }

  switch (size) {
    case "sm":
      rootClassName.push(cl.button_sm);
      break;
    case "md":
      rootClassName.push(cl.button_md);
      break;
    case "lg":
      rootClassName.push(cl.button_lg);
      break;
  }

  return (
    <button className={rootClassName.join(" ")} style={{ ...styles }} onClick={onClick}>
      {children}
    </button>
  )
}
