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
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<PoliticalEntity> {
    try {
      const { data: dataFromServer } = await axios.post(
        API_ENDPOINT,
        data,
        config
      );
      return new PoliticalEntity(dataFromServer);
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
};
