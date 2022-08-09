/* eslint-disable camelcase */
/* eslint-disable no-console */
import jwt_decode from "jwt-decode";
import { ILoginRequest, ITodo } from "../types/todo";
import axiosInstance from "./api";
import { getTodos } from "./cards";

const loginRequest: ILoginRequest = {
  login: "letscode",
  senha: "lets@123"
};

const expired = (expiresIn: string) => {
  const currentDate = new Date();
  return Number(expiresIn) * 1000 < currentDate.getTime();
};

const getExpiresIn = (token: string): string => {
  const decodedToken = jwt_decode(token);
  let expiresIn = 0;

  if (decodedToken !== null && typeof decodedToken === "object") {
    const decodedExpires: {
      exp?: string;
    } = decodedToken;

    expiresIn = typeof decodedExpires.exp === "number" ? decodedExpires.exp : 0;
  }
  return expiresIn.toString();
};

const verifyToken = async (): Promise<string> => {
  let tokenBySession = sessionStorage.getItem("token") ?? "";
  let expiresInBySession = sessionStorage.getItem("expiresIn") ?? "";
  if (tokenBySession === undefined || expired(expiresInBySession)) {
    tokenBySession = (await axiosInstance.post("/login", loginRequest)).data;
    expiresInBySession = getExpiresIn(tokenBySession);
    sessionStorage.setItem("token", tokenBySession);
    sessionStorage.setItem("expiresIn", expiresInBySession);
    return tokenBySession;
  }
  return tokenBySession;
};

const authAndCards = async (): Promise<ITodo[]> => {
  const token = await verifyToken();

  axiosInstance.defaults.headers.common.Authorization = token;
  const cardsResponse = await getTodos();
  return cardsResponse;
};

export default authAndCards;
