import axios, { AxiosRequestConfig } from 'axios';

import { baseAxiosConfig } from '../utils/retrieveAuthToken';

const API_ENDPOINT = `http://localhost/api/nations/`;

export const politicalEntities = {
  async delete(id: string, config?: AxiosRequestConfig) {
    const baseConfig = await baseAxiosConfig();
    return axios.delete(`${API_ENDPOINT}/${id}`, config || baseConfig);
  },
  async get(id: string, config?: AxiosRequestConfig) {
    const baseConfig = await baseAxiosConfig();
    return axios.get(`${API_ENDPOINT}/${id}`, config || baseConfig);
  },
  async list(config?: AxiosRequestConfig) {
    const baseConfig = await baseAxiosConfig();
    return axios.get(API_ENDPOINT, config || baseConfig);
  },
  async patch(id: string, data?: any, config?: AxiosRequestConfig) {
    const baseConfig = await baseAxiosConfig();
    return axios.patch(`${API_ENDPOINT}/${id}`, data, config || baseConfig);
  },
  async post(data?: any, config?: AxiosRequestConfig) {
    const baseConfig = await baseAxiosConfig();
    return axios.post(API_ENDPOINT, data, config || baseConfig);
  }
};
