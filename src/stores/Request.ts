import axios from "axios";
import { SERVER_URL } from "../config";

export function Request(method: string, url: string, data?: any) {
  return axios.request({
    method: method,
    baseURL: `http://${SERVER_URL}`,
    url,
    data: method.toUpperCase() !== "GET" ? data : undefined,
    params: method.toUpperCase() === "GET" ? data : undefined,
  });
}
