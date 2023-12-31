import React, { useState, InputHTMLAttributes } from "react";

import { ReactComponent as IconEye } from "../../../assets/icons/iconEye.svg";

import * as S from "./InputPassword.styles";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error: string;
}

export const InputPassword = React.forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => {
    const [inputType, setInputType] = useState<"password" | "text">("password");

    function handleUpdateInputType() {
      if (inputType === "password") setInputType("text");
      else setInputType("password");
    }

    return (
      <S.ContainerInput>
        <S.InputContent>
          <S.Input
            withError={!!props.error}
            type={inputType}
            {...props}
            ref={ref}
          />
          <S.Icon>
            <IconEye onClick={handleUpdateInputType} />
          </S.Icon>
        </S.InputContent>
        <S.SpanError>{props.error}</S.SpanError>
      </S.ContainerInput>
    );
  }
);
