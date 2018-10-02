import axios, { AxiosRequestConfig } from 'axios';

import { baseAxiosConfig } from '../utils/retrieveAuthToken';

const API_ENDPOINT = `${process.env.BACKEND_URL}/nations/`;

export const politicalEntities = {
  async get(id: string, config?: AxiosRequestConfig) {
    const baseConfig = await baseAxiosConfig();
    return axios.get(`${API_ENDPOINT}/${id}`, config || baseConfig);
  },
  async post(data?: any, config?: AxiosRequestConfig) {
    const baseConfig = await baseAxiosConfig();
    return axios.post(API_ENDPOINT, data, config || baseConfig);
  }
};
