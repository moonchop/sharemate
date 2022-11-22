import request from "../../stores/Request";

type LoginFormType = {
  email: string;
  password: string;
};

export const loginApi = async (loginForm: LoginFormType) =>
  await request.post("/login", loginForm);

export const RegisterApi = async (params: any) =>
  await request.post("/register", params);

export const checkEmail = async (email: string) =>
  request.post("/register/email", { email });

export const FavorApi = async (params: any) =>
  await request.post("/favor", params);

export const GroupApi = async (params: any) =>
  await request.post("/group", params);
