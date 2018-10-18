import axios, { AxiosRequestConfig } from 'axios';

import { returnResponse } from './returnResponse';

type Constructor<T> = { new (...args: any[]): T };

export function apiEndpoint<T>(endpoint: string, Type: Constructor<T>) {
  const API_ENDPOINT = `${process.env.BACKEND_URL}/${endpoint}/`;

  return {
    delete(id: string, config?: AxiosRequestConfig): Promise<T> {
      return returnResponse(async () => {
        const { data } = await axios.delete(`${API_ENDPOINT}${id}/`, config);
        return new Type(data);
      });
    },
    get(id: string, config?: AxiosRequestConfig): Promise<T> {
      return returnResponse(async () => {
        const { data } = await axios.get(`${API_ENDPOINT}${id}/`, config);
        return new Type(data);
      });
    },
    list(config?: AxiosRequestConfig): Promise<T[]> {
      return returnResponse(async () => {
        const { data } = await axios.get(API_ENDPOINT, config);
        return data.map((value: any) => new Type(value));
      });
    },
    patch(id: string, value?: any, config?: AxiosRequestConfig): Promise<T> {
      return returnResponse(async () => {
        const { data } = await axios.patch(
          `${API_ENDPOINT}${id}/`,
          value,
          config
        );
        return new Type(data);
      });
    },
    post(value?: any, config?: AxiosRequestConfig): Promise<T> {
      return returnResponse(async () => {
        const { data } = await axios.post(API_ENDPOINT, value, config);
        return new Type(data);
      });
    }
  };
}
