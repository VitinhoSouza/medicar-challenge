import React, { InputHTMLAttributes } from "react";

import * as S from "./Input.styles";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", error, ...rest }, ref) => (
    <S.ContainerInput>
      <S.Input withError={!!error} type={type} {...rest} ref={ref} />
      <S.SpanError>{error}</S.SpanError>
    </S.ContainerInput>
  )
);
