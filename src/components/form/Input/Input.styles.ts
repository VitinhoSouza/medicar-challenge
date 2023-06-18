import styled from 'styled-components';
import theme from '../../../styles/theme';

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`

type InputProps = {
  withError: boolean;
};

export const Input = styled.input<InputProps>`
  width: 100%;
  height: 2.5rem;

  color: ${theme.colors.gray2};

  ::placeholder {
    color: ${theme.colors.gray2};
  }
  
  border: none;
  border-radius: 4px;
  padding: 0.625rem 6.25rem 0.625rem 0.625rem;
  font-size: 0.8125rem;

  &:focus {
    border: none;
    outline-style: solid;
    outline-color: ${theme.colors.primary_hover};
    outline-width: 2px;
  }

  outline-style: solid;
  outline-width: 1px;
  outline-color: ${theme.colors.gray2};

  &:hover {
    border: none;
    outline-width: 2px;
    outline-color: ${theme.colors.primary};
  }

  outline-color:  ${(props) => (props.withError ? '#ff3333' : '')};
`;

export const SpanError = styled.span`
  font-size: 0.75rem;
  color: #ff3333;

  margin: 0.2rem;
`;