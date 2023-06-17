

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Button } from "../../components/form/Button/Button";
import { Input } from "../../components/form/Input/Input";
import { InputPassword } from "../../components/form/InputPassword/InputPassword";

import { medicarAPI } from "../../services/medicarAPI";
import { showAlert } from "../../utils/alert";

import logoImage from "../../assets/logo.png";

import * as S from "./Register.styles";

export const Register = () => {

  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  async function tryRegister(data: any) {

    if(data.password !== data.password_confirmation){
      showAlert("error", "As senhas devem ser iguais.");
      return;
    }

    const res = await medicarAPI.registerUser(data);
    if (res === "invalid") {
      showAlert("error", "Houve um erro ao cadastrar o usuário!");
    } else {
      showAlert("success", "O usuário foi cadastrado.");
      navigate("/");
    }
    
  }

  return(
    <S.ContainerPageRegister>
        <S.ContentPageRegister onSubmit={handleSubmit(tryRegister)}>
          <img src={logoImage}/>

          <span>Crie sua conta</span>

          <Input
            type="text"
            placeholder="Nome"
            {...register('username', { required: true } )}
          />

          <Input
            type="email"
            placeholder="Email"
            {...register("email", { required: true } )}
          />

          <InputPassword
            placeholder="Senha"
            {...register("password", { required: true } )}
          />

          <InputPassword
            placeholder="Confirmar senha"
            {...register("password_confirmation", { required: true } )}
          />

          <S.ButtonActions>
            <Button category="secondary" type="button" onClick={() => navigate("/")}>Cancelar</Button>
            <Button category="primary" type="submit">Confirmar</Button>
          </S.ButtonActions>

        </S.ContentPageRegister>
    </S.ContainerPageRegister>
  )
}