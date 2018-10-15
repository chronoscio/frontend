import axios, { AxiosRequestConfig } from 'axios';

import { Territory } from '../models';

const API_ENDPOINT = `${process.env.BACKEND_URL}territories/`;

export const territories = {
  async list(config?: AxiosRequestConfig): Promise<Territory[]> {
    try {
      const { data } = await axios.get(API_ENDPOINT, config);
      return data.map((raw: any) => new Territory(raw));
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
  async post(
    value?: any,
    config?: AxiosRequestConfig
  ): Promise<Territory> {
    try {
      const { data } = await axios.post(API_ENDPOINT, value, config);
      return new Territory(data);
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
};
