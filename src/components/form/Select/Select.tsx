import React, { SelectHTMLAttributes } from "react";
import * as S from "./SelectStyles";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: {
    id: string;
    nome: string;
    isDisabled?: boolean;
  }[];
  label: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, label = "", ...rest }, ref) => (
    <S.Container>
      <select {...rest} ref={ref}>
        <option value="" selected hidden>
          {label}
        </option>
        {options?.map((option) => (
          <option key={String(option.id)} value={String(option.id)} disabled={option.isDisabled || false}>
            {option.nome}
          </option>
        ))}
      </select>
    </S.Container>
  )
);
