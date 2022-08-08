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

const authAndCards = async (): Promise<ITodo[]> => {
  // TODO: verificar se token existe e se é ainda é válido
  const response = await axiosInstance.post("/login", loginRequest);
  const decodedToken = jwt_decode(response.data);

  let expiresIn = 0;

  if (decodedToken !== null && typeof decodedToken === "object") {
    const token: {
      exp?: string;
    } = decodedToken;

    expiresIn = typeof token.exp === "number" ? token.exp : 0;
  }

  const currentDate = new Date();

  if (expiresIn * 1000 < currentDate.getTime()) {
    console.log("Token expired!");
  } else {
    axiosInstance.defaults.headers.common.Authorization = response.data;
    const cardsResponse = await getTodos();
    return cardsResponse;
  }
  return [];
};

export default authAndCards;
