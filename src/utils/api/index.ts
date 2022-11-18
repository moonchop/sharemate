import axios from "axios";

type ApiMethodType = "POST" | "GET" | "PUT" | "DETELE";

const SERVER_ADDRESS = "http://13.125.103.60:8080/";

export const api = (method: ApiMethodType) => (path: string) => (data: any) =>
  axios({
    method,
    url: SERVER_ADDRESS + path,
    data,
  });
