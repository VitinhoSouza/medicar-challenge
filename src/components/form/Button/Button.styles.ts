import styled from 'styled-components';

interface ButtonProps {
  category: "primary" | "secondary" | "tertiary",
  disabled: boolean
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  gap: 0.7rem;

  padding: ${(props) => props.category === 'tertiary' ? '0' : '1rem 3rem'};
  font-weight: ${(props) => props.category === 'tertiary' ? 400 : 700};
  font-size:  ${(props) => props.category === 'tertiary' ? '0.8125rem' : '1.125rem'};
  line-height: 1.3125rem;
  border-radius: 8px;

  height: 2.5rem;
  cursor: pointer;

  color: ${(props) => props.category === 'primary' ? props.theme.colors.white : props.theme.colors.primary};
  background-color: ${(props) => props.category === 'primary' ? props.theme.colors.primary : 'transparent'};

  background-color: ${(props) => props.disabled && props.category === 'primary' ? props.theme.colors.secondary_hover : ''};
  

  border: ${(props) => props.category === 'secondary' ? `1px solid transparent` : 'none'};

  transition: border-color 300ms, background-color 300ms, color 300ms;

  &:hover{
    border-color: ${(props) => props.category === 'secondary' ? `${props.theme.colors.primary}` : 'transparent'};
    background-color: ${(props) => props.category === 'primary' && !props.disabled ? `${props.theme.colors.primary_hover}` : ''};
    color: ${(props) => props.category === 'tertiary' ? `${props.theme.colors.primary_hover}` : ''};
  }

`