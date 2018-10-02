import axios, { AxiosRequestConfig } from 'axios';

import { baseAxiosConfig } from '../utils/retrieveAuthToken';
import { Territory } from '../models';

const API_ENDPOINT = `${process.env.BACKEND_URL}/territories/`;

export const territories = {
  async list(config?: AxiosRequestConfig) {
    const baseConfig = await baseAxiosConfig();
    const response = await axios.get(API_ENDPOINT, config || baseConfig);
    return response.data.map((raw: any) => new Territory(raw));
  }
};
