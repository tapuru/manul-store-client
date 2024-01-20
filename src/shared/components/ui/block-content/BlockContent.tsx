import React from 'react';
import cl from "./BlockContent.module.css"

interface Props {
  children?: React.ReactNode;
  size?: "sm"
}

export const BlockContent = ({ children, size }: Props) => {

  const rootClassName = [cl.blockContent];

  switch (size) {
    case "sm":
      rootClassName.push(cl.blockContent_sm);
      break;
  }

  return (
    <div className={rootClassName.join(" ")} >
      {children}
    </div>
  )
}
