import styled from 'styled-components';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import theme from '../../../styles/theme';

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  margin-top: -1rem;

  max-width: 100% !important;
`;

export const CheckboxRoot = styled(RadixCheckbox.Root)`
  cursor: pointer;

  width: 1.25rem;
  height: 1.25rem;
  border-radius: 4px;

  border: 1.5px solid #d3d5d9;
  background-color: white;
  transition: border-color 300ms;

  &[data-state='checked'] {
    background-color: ${theme.colors.primary};
  }
`;

export const CheckboxIndicator = styled(RadixCheckbox.Indicator)`
  > svg path {
    stroke: ${theme.colors.white};
  }
`;

export const Label = styled.label`
  font-weight: 400;
  font-size: 0.875rem;
  color: ${theme.colors.gray2};

  cursor: pointer;

  text-align: center;
`;
