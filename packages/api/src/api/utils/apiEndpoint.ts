import axios, { AxiosRequestConfig } from 'axios';

import { config } from '../../config';
import { returnResponse } from './returnResponse';

type Constructor<T> = { new (...args: any[]): T };

export function apiEndpoint<T>(endpoint: string, Type: Constructor<T>) {
  const API_ENDPOINT = `${process.env.BACKEND_URL}/${endpoint}/`;

  return {
    delete(id: string, axiosConfig?: AxiosRequestConfig): Promise<T> {
      return returnResponse(async () => {
        const { data } = await axios.delete(`${API_ENDPOINT}${id}/`, {
          ...config.baseAxiosConfig,
          ...axiosConfig
        });
        return new Type(data);
      });
    },
    get(id: string, axiosConfig?: AxiosRequestConfig): Promise<T> {
      return returnResponse(async () => {
        const { data } = await axios.get(`${API_ENDPOINT}${id}/`, {
          ...config.baseAxiosConfig,
          ...axiosConfig
        });
        return new Type(data);
      });
    },
    list(axiosConfig?: AxiosRequestConfig): Promise<T[]> {
      return returnResponse(async () => {
        const { data } = await axios.get(API_ENDPOINT, {
          ...config.baseAxiosConfig,
          ...axiosConfig
        });
        return data.map((value: any) => new Type(value));
      });
    },
    patch(
      id: string,
      value?: any,
      axiosConfig?: AxiosRequestConfig
    ): Promise<T> {
      return returnResponse(async () => {
        const { data } = await axios.patch(`${API_ENDPOINT}${id}/`, value, {
          ...config.baseAxiosConfig,
          ...axiosConfig
        });
        return new Type(data);
      });
    },
    post(value?: any, axiosConfig?: AxiosRequestConfig): Promise<T> {
      return returnResponse(async () => {
        const { data } = await axios.post(API_ENDPOINT, value, {
          ...config.baseAxiosConfig,
          ...axiosConfig
        });
        return new Type(data);
      });
    }
  };
}
