import request from "../../stores/Request";

type LoginFormType = {
  email: string;
  password: string;
};

export const loginApi = async (loginForm: LoginFormType) =>
  await request.post("/sign/login", loginForm);

export const RegisterApi = async (params: any) =>
  await request.post("/user", params);

export const checkEmail = async (email: string) =>
  await request.post("/sign/email", { email });

export const FavorApi = async (params: any) =>
  await request.post("/favor", params);
