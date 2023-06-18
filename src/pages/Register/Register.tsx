import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "../../components/form/Button/Button";
import { Input } from "../../components/form/Input/Input";
import { InputPassword } from "../../components/form/InputPassword/InputPassword";

import { medicarAPI } from "../../services/medicarAPI";
import { showAlert } from "../../utils/alert";
import { useAuth } from "../../hooks/useAuth";

import logoImage from "../../assets/logo.png";

import * as S from "./Register.styles";

const registerSchema = z
  .object({
    username: z.string().min(1, {
      message: "Campo obrigatório",
    }),
    email: z
      .string()
      .min(1, { message: "Campo obrigatório" })
      .email("Digite um e-mail válido"),
    password: z.string().min(1, {
      message: "Campo obrigatório",
    }),
    password_confirmation: z.string().min(1, {
      message: "Campo obrigatório",
    }),
  })
  .refine((data) => data.password === data.password_confirmation, {
    path: ["password_confirmation"],
    message: "As senhas devem ser iguais",
  });

export type RegisterFormData = z.infer<typeof registerSchema>;

export const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  async function tryRegister(data: RegisterFormData) {
    const res = await medicarAPI.registerUser(data);
    if (res === "invalid") {
      showAlert("error", "Houve um erro ao cadastrar o usuário!");
    } else {
      showAlert("success", "O usuário foi cadastrado.");
      navigate("/");
    }
  }

  const { auth } = useAuth();

  useEffect(() => {
    if (!!auth && !!auth.token && auth.token !== "null") {
      navigate("/home");
    }
  }, [auth]);

  return (
    <S.ContainerPageRegister>
      <S.ContentPageRegister onSubmit={handleSubmit(tryRegister)}>
        <img src={logoImage} />

        <span>Crie sua conta</span>

        <Input
          type="text"
          placeholder="Nome"
          {...register("username")}
          error={errors.username?.message || ""}
        />

        <Input
          type="email"
          placeholder="Email"
          {...register("email")}
          error={errors.email?.message || ""}
        />

        <InputPassword
          placeholder="Senha"
          {...register("password")}
          error={errors.password?.message || ""}
        />

        <InputPassword
          placeholder="Confirmar senha"
          {...register("password_confirmation")}
          error={errors.password_confirmation?.message || ""}
        />

        <S.ButtonActions>
          <Button
            category="secondary"
            type="button"
            onClick={() => navigate("/")}
          >
            Cancelar
          </Button>
          <Button category="primary" type="submit">
            Confirmar
          </Button>
        </S.ButtonActions>
      </S.ContentPageRegister>
    </S.ContainerPageRegister>
  );
};
