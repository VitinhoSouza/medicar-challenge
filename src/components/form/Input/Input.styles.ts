import styled from 'styled-components';
import theme from '../../../styles/theme';


export const Input = styled.input`
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
`;