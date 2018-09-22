import axios, { AxiosRequestConfig } from 'axios';

const API_ENDPOINT = 'http://localhost/api/nations'; // TODO Take from env

export const politicalEntities = {
  delete(id: string, config?: AxiosRequestConfig) {
    return axios.delete(`${API_ENDPOINT}/${id}`, config);
  },
  get(id: string, config?: AxiosRequestConfig) {
    return axios.get(`${API_ENDPOINT}/${id}`, config);
  },
  list(config?: AxiosRequestConfig) {
    return axios.get(API_ENDPOINT, config);
  },
  patch(id: string, data?: any, config?: AxiosRequestConfig) {
    return axios.patch(`${API_ENDPOINT}/${id}`, data, config);
  },
  post(data?: any, config?: AxiosRequestConfig) {
    return axios.post(API_ENDPOINT, data, config);
  }
};
