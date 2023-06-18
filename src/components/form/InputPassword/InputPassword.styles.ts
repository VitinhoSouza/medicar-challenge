import styled from 'styled-components';
import theme from '../../../styles/theme';

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 24.5rem;
  max-height: 2.5rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 2.5rem;

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
`;

export const Icon = styled.div`
  position: relative;
  z-index: 2;

  width: 1.5rem;
  height: 1.5rem;

  left: 90%;
  bottom: 1.6rem;

  > svg {
    cursor: pointer;
  }
`;
