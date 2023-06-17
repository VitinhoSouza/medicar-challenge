import React, { ButtonHTMLAttributes } from "react";
import * as S from "./Button.styles";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  category?: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
  style?: any;
  children?: any;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { category = "primary", type = "button", disabled = false, children, ...rest },
    ref
  ) => (
    <S.Button disabled={disabled} category={category} type={type} {...rest} ref={ref}>
      {children}
    </S.Button>
  )
);
