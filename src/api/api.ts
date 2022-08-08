/* eslint-disable no-console */
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const BASE_URL = "http://0.0.0.0:5000";

const axiosInstance = axios.create({
  baseURL: BASE_URL
});

axiosInstance.defaults.headers.common.Authorization = "";

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  console.log("config.data: ", config.data);
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  console.log("error.message: ", error.message);
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  console.log("response.data: ", response.data);
  return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  console.log("error.message: ", error.message);
  return Promise.reject(error);
};

axiosInstance.interceptors.request.use(onRequest, onRequestError);
axiosInstance.interceptors.response.use(onResponse, onResponseError);

export default axiosInstance;
