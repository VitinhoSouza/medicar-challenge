import React, { ButtonHTMLAttributes, ReactNode } from "react";
import * as S from "./Button.styles";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  category?: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
  children?: ReactNode;
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
