import { ReactNode } from "react";
import cl from "./ArrowButton.module.css";

interface Props {
  children?: ReactNode;
  className?: string;
  onClick?: () => void
}

export const ArrowButton = ({ children, className, onClick }: Props) => {

  const rootClassName = [cl.button, className]

  return (
    <button className={rootClassName.join(" ")} onClick={onClick}>
      {children}
    </button>
  )
}
