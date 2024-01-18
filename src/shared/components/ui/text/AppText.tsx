import { CSSProperties, ReactNode } from "react";
import cl from "./Text.module.css";

interface Props {
  children?: ReactNode;
  variant?: "h1" | "h2" | "h3" | "p" | "price";
  color?: "black" | "white" | "gray"| "inherit";
  align?: "center" | "left" | "right";
  styles?: CSSProperties;
}

export const AppText = ({ children, color, styles, variant, align }: Props) => {

  const rootClassName = [cl.text];

  if (color) rootClassName.push({
    black: cl.text_black,
    white: cl.text_white,
    gray: cl.text_gray,
    inherit: cl.text_inherit
  }[color]);

  if (align) rootClassName.push({
    center: cl.text_center,
    left: cl.text_left,
    right: cl.text_right,
  }[align]);

  switch (variant) {
    case "h1":
      rootClassName.push(cl.text_h1);
      return (
        <h1 className={rootClassName.join(" ")} style={styles} >
          {children}
        </h1>
      )
    case "h2":
      rootClassName.push(cl.text_h2);
      return (
        <h2 className={rootClassName.join(" ")} style={styles} >
          {children}
        </h2>
      )
    case "h3":
      rootClassName.push(cl.text_h3);
      return (
        <h3 className={rootClassName.join(" ")} style={styles} >
          {children}
        </h3>
      )
    case "price":
      rootClassName.push(cl.text_price);
      break
  }


  return (
    <p className={rootClassName.join(" ")} style={styles} >
      {children}
    </p>
  )
}
