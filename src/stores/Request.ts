// import axios from "axios";
import axios from "axios";
import { useAuth } from "./auth";
import { SERVER_URL } from "../config";

const request = axios.create({
  baseURL: `http://${SERVER_URL}`,
});

request.interceptors.request.use(async (request) => {
  const { accessToken } = useAuth.getState(); // 토큰 가져오기
  if (accessToken) {
    request.headers = {
      Authorization: `Bearer ${accessToken}`,
    };
  }
  return request;
});

export default request;

/*
request.get("/user", {
  headers,
  params
});

request.post("/asd", {
  
}, {
  headers
})
*/
