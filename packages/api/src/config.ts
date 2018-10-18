import { AxiosRequestConfig } from 'axios';

/**
 * Some configs for the api, modifiable by the external world via the setters
 * below.
 */
export const config = {
  baseAxiosConfig: {} as AxiosRequestConfig,
  onError: (err: Error): void | never => {
    throw err;
  }
};

export function setConfig(newConfig: Partial<typeof config>) {
  Object.assign(config, newConfig);
}
