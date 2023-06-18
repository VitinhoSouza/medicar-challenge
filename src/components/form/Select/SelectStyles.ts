import styled from 'styled-components';
import theme from '../../../styles/theme';

type InputProps = {
  withError: boolean;
};

export const Container = styled.div<InputProps>`
  border: none;
  outline: none;
  border-radius: 0.5rem;
  transition: 0.3s;

  :focus{
    border: none;
    outline: none;
  }

  :focus-within {
    border: 1px solid ${theme.colors.primary};
  }

  select{
    width: 25rem;
    height: 2.5rem;
    padding: 0.5rem 0.25rem;
    
    border: 0;
    border-radius: 0.5rem;
    border-right: 0.7rem solid transparent;

    font-size: 1rem;
    line-height: 1.5rem;
    color: ${theme.colors.black};

    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.gray2};
    border-radius: 4px;

    border-color:  ${(props) => (props.withError ? '#ff3333' : '')};
  }
  
`;

export const SpanError = styled.span`
  font-size: 0.75rem;
  color: #ff3333;

  margin: 0.2rem;
`;