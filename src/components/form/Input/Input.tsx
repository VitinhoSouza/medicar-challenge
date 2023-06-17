import React, { InputHTMLAttributes } from "react";

import * as S from "./Input.styles";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", ...rest }, ref) => (
    <S.Input type={type} {...rest} ref={ref} />
  )
);
