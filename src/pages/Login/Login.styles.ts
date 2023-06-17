import styled from 'styled-components';

export const ContainerPageLogin = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContentPageLogin = styled.form`
  /* background-color: red; */

  height: 50%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  >img{
    max-height: 3.125rem;
    max-width: 11.25rem;
  }
`

export const ButtonActions = styled.div`
  display: flex;
  gap: 2rem;
`