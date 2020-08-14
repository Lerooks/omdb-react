import React, { forwardRef, ReactNode, ButtonHTMLAttributes } from "react";
import * as S from "./button-styles";

interface Props extends ButtonHTMLAttributes<HTMLElement> {
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { children } = props;

  return (
    <S.Button ref={ref} {...props}>
      {children}
    </S.Button>
  );
});

export default Button;
