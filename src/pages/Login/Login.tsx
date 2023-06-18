import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "../../components/form/Button/Button";
import { Input } from "../../components/form/Input/Input";
import { InputPassword } from "../../components/form/InputPassword/InputPassword";
import { Checkbox } from "../../components/form/Checkbox/Checkbox";

import { medicarAPI } from "../../services/medicarAPI";
import { showAlert } from "../../utils/alert";
import { useAuth } from "../../hooks/useAuth";

import logoImage from "../../assets/logo.png";

import * as S from "./Login.styles";

const loginSchema = z.object({
  username: z.string().min(1, {
    message: "Campo obrigatório",
  }),
  password: z.string().min(1, {
    message: "Campo obrigatório",
  }),
  remember_password: z.boolean().optional(),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const { auth, setAuthLS } = useAuth();

  async function tryLogin(data: LoginFormData) {
    const res = await medicarAPI.login(data);
    if (res.message === "invalid") {
      showAlert("error", "Email e/ou senha incorretos!");
    } else {
      showAlert("success", "Login realizado.");
      setAuthLS({ token: res.token });
      navigate("/");
    }
  }

  useEffect(() => {
    if (!!auth && !!auth.token && auth.token !== "null") {
      navigate("/home");
    }
  }, [auth]);

  return (
    <S.ContainerPageLogin>
      <S.ContentPageLogin as="form" onSubmit={handleSubmit(tryLogin)}>
        <img src={logoImage} />

        <Input
          type="text"
          placeholder="Email ou Login"
          {...register("username")}
          error={errors.username?.message || ""}
        />

        <InputPassword
          placeholder="Senha"
          {...register("password")}
          error={errors.password?.message || ""}
        />

        <Controller
          name="remember_password"
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <Checkbox
              label="Lembrar minha senha"
              checked={field.value}
              onCheckedChange={(checked: boolean) => {
                setValue("remember_password", checked);
              }}
              {...field}
            />
          )}
        />

        <S.ButtonActions>
          <Button
            category="secondary"
            type="button"
            onClick={() => navigate("/register")}
          >
            Criar conta
          </Button>
          <Button category="primary" type="submit">
            Acessar
          </Button>
        </S.ButtonActions>
      </S.ContentPageLogin>
    </S.ContainerPageLogin>
  );
};
