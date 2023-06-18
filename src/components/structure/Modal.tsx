import { Button } from "../../components/form/Button/Button";

import * as S from "./Modal.styles";

interface IModal {
  title: string;
  description?: string;
  okFunction: () => void;
  cancelFunction: () => void;
}

export const Modal = ({ title, description, okFunction, cancelFunction }: IModal) => {

  return (
    <S.DialogContent>
        <S.DialogTitle>{title}</S.DialogTitle>

        <S.Main>
          {description}
        </S.Main>

        <S.ActionButtons>
          <S.DialogClose asChild>
            <Button category="secondary" onClick={cancelFunction}>Cancelar</Button>
          </S.DialogClose>

          <Button category="primary" onClick={okFunction}>
            Confirmar
          </Button>
        </S.ActionButtons>
    </S.DialogContent>
  );
};
