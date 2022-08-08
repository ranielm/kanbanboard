/* eslint-disable no-console */
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const BASE_URL = "http://0.0.0.0:5000";

const axiosInstance = axios.create({
  baseURL: BASE_URL
});

axiosInstance.defaults.headers.common.Authorization = "";

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

axiosInstance.interceptors.request.use(onRequest, onRequestError);
axiosInstance.interceptors.response.use(onResponse, onResponseError);

export default axiosInstance;
