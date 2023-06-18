import styled from 'styled-components';

export const ContainerPageLogin = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContentPageLogin = styled.form`
  height: 50%;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  >img{
    max-height: 3.125rem;
    max-width: 11.25rem;

    margin-bottom: 1rem;
  }

  >div{
    &:nth-child(4){
      margin-top: -0.5rem;
    }
  }
  
`

export const ButtonActions = styled.div`
  display: flex;
  gap: 2rem;

  margin-top: 1rem;
`