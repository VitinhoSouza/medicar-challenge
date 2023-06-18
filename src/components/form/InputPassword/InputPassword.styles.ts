import styled from 'styled-components';
import theme from '../../../styles/theme';

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 24.5rem;
  max-height: 2.5rem;
`;

type InputProps = {
  withError: boolean;
};

export const Input = styled.input<InputProps>`
  width: 100%;
  min-height: 2.5rem;

  color: ${theme.colors.gray2};
  
  ::placeholder {
    color: ${theme.colors.gray2};
  }

  border: none;
  border-radius: 4px;
  padding: 0.625rem 3.125rem 0.625rem 0.625rem;
  font-size: 0.8125rem;

  outline: 1px solid ${theme.colors.gray2};

  &:focus {
    outline-color: ${theme.colors.primary_hover};
    outline-width: 2px;
  }

  &:hover {
    outline-width: 2px;
    outline-color: ${theme.colors.primary};
  }

  outline-color:  ${(props) => (props.withError ? '#ff3333' : '')};
`;

export const Icon = styled.div`
  position: relative;
  z-index: 2;

  width: 1.5rem;
  height: 1.5rem;

  left: 90%;
  bottom: 1.8rem;

  > svg {
    cursor: pointer;
  }
`;

export const SpanError = styled.span`
  font-size: 0.75rem;
  color: #ff3333;

  margin: 0.2rem;
`;