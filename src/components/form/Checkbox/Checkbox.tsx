import { ReactComponent as IconCheck } from '../../../assets/icons/iconCheck.svg';
import * as S from './Checkbox.styles';
import { useState } from 'react';

export interface CheckboxProps {
  label: string;
  name: string;
  checked?: boolean;
  onCheckedChange?: (value: boolean) => void;
}

export const Checkbox = ({
  label,
  name,
  checked,
  onCheckedChange,
  ...rest
}: CheckboxProps) => {
  const [value, setValue] = useState(false);

  return (
    <S.CheckboxContainer>
      <S.CheckboxRoot
        id={name}
        onCheckedChange={
          onCheckedChange
            ? onCheckedChange
            : (newValue: boolean) => setValue(newValue)
        }
        value={checked ? String(checked) : String(value)}
        aria-label={`Defina se você quer ${label} deixando esse componente ativo`}
        {...rest}
      >
        <S.CheckboxIndicator>
          <IconCheck />
        </S.CheckboxIndicator>
      </S.CheckboxRoot>
      <S.Label htmlFor={name}>{label}</S.Label>
    </S.CheckboxContainer>
  );
};
