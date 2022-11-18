import { api } from ".";

type LoginFormType = {
  email: string;
  password: string;
};

export const loginApi = async (loginForm: LoginFormType) =>
  await api("POST")("login")(loginForm);

export const RegisterApi = async (params: any) =>
  await api("POST")("register")(params);
