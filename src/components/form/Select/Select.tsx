import React, { SelectHTMLAttributes } from "react";
import * as S from "./SelectStyles";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: {
    id: string;
    nome: string;
    isDisabled?: boolean;
  }[];
  label: string;
  error: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, label = "", error, ...rest }, ref) => (
    <S.Container withError={!!error}>
      <select {...rest} ref={ref}>
        <option value="" selected hidden>
          {label}
        </option>
        {options?.map((option) => (
          <option
            key={String(option.id)}
            value={String(option.id)}
            disabled={option.isDisabled || false}
          >
            {option.nome}
          </option>
        ))}
      </select>
      <S.SpanError>{error}</S.SpanError>
    </S.Container>
  )
);
