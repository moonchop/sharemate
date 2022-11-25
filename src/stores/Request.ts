import axios from "axios";
import { useAuth } from "./auth";
import { SERVER_URL } from "../config";

const request = axios.create({
  baseURL: `http://${SERVER_URL}`,
});

request.interceptors.request.use(async (request) => {
  const { accessToken } = useAuth.getState(); // 전역으로 저장된 토큰 가져오기
  if (accessToken) {
    // 토큰이 있다면 헤더에 저장
    request.headers = {
      Authorization: `${accessToken}`,
    };
  }
  return request;
});

export default request;
