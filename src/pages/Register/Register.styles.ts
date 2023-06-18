import styled from 'styled-components';
import theme from '../../styles/theme';

export const ContainerPageRegister = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContentPageRegister = styled.form`
  height: 70%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  >img{
    max-height: 3.125rem;
    max-width: 11.25rem;
  }

  >span{
    color: ${theme.colors.black};
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.3125rem;
  }
`

export const ButtonActions = styled.div`
  display: flex;
  gap: 2rem;
`