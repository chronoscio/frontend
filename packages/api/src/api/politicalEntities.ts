import axios, { AxiosRequestConfig } from 'axios';

import { PoliticalEntity } from '../models';

const API_ENDPOINT = `${process.env.BACKEND_URL}/nations/`;

export const politicalEntities = {
  async get(id: string, config?: AxiosRequestConfig): Promise<PoliticalEntity> {
    try {
      const { data } = await axios.get(`${API_ENDPOINT}${id}/`, config);
      return new PoliticalEntity(data);
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
  async post(
    value?: any,
    config?: AxiosRequestConfig
  ): Promise<PoliticalEntity> {
    try {
      const { data } = await axios.post(API_ENDPOINT, value, config);
      return new PoliticalEntity(data);
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
};
