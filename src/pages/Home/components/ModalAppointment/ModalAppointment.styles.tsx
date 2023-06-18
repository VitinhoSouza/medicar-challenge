import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';
import theme from '../../../../styles/theme';

export const DialogRoot = styled(Dialog.Root)`
  width: 100vw;
  height: 100vh;
`;

export const DialogPortal = styled(Dialog.Portal)`
  width: 100%;
  height: 100%;
`;

export const ButtonTriggerModal = styled(Dialog.Trigger)`
  padding: 1rem 1rem;
  font-size: 0.8125rem;
  font-weight: 400;
  
  height: 1.5rem;
  line-height: 1.3125rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  cursor: pointer;
  

  color: ${theme.colors.white};
  background-color: ${theme.colors.primary};
  border: none;

  transition: background-color 300ms;

  &:hover{
    background-color: ${theme.colors.primary_hover};
  }
`

export const DialogOverlay = styled(Dialog.Overlay)`
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const DialogContent = styled(Dialog.Content)`
  background-color: white;
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 28.125rem;
  max-height: 85vh;
  padding: 1.5625rem;
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const DialogTitle = styled(Dialog.Title)`
  margin: 0;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.3125rem;

  display: flex;
  align-items: center;
  color: ${theme.colors.black};
`

export const DialogDescription = styled(Dialog.Description)`
  background-color: red;
`

export const DialogClose = styled(Dialog.Close)`
  
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`

export const ActionButtons = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
`