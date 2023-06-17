import styled from 'styled-components';
import theme from '../../styles/theme';

export const ContainerPageHome = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContentPageHome = styled.form`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem 0 1rem 0;

  >img{
    max-width: 5.625rem;
    max-height: 1.5625rem;
  }
`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  
  >span{
    font-size: 0.8125rem;
    color: ${theme.colors.gray2};
  }
`

export const ContainerTable = styled.div`
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  min-height: 80vh;
`

export const ContainerTitleAndAction = styled.div`
  width: 100%;
  padding: 1rem 1rem 0.5rem;

  >h2{
    color: ${theme.colors.black};
    font-weight: 700;
    font-size: 1.125rem;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;

`

export const TableAppointments = styled.table`
  width: 100%;
  display: flex;
  flex-direction: column;

  padding: 0.5rem 1.5rem;

  tr{
    width: 100%;

    display: flex;
    align-items: center;

    th{
      font-weight: 700;
      font-size: 0.75rem;
      line-height: 0.875rem;
      text-transform: uppercase;
      color: ${theme.colors.gray2};
    }

    td{
      font-size: 0.8125rem;
      line-height: 0.9375rem;
      display: flex;
      justify-content: center;

      color:  ${theme.colors.black};
    }

    th, td{
      min-width: 20%;
      max-width: 20%;
    }
  }

  
`
