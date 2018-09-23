import { AxiosRequestConfig } from 'axios';
import * as localforage from 'localforage';

export const baseAxiosConfig = async () => {
  const authToken = await retrieveAuthToken();
  return {
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  } as AxiosRequestConfig;
};

/**
 * Function to retrieve the auth token, from whereever we want. By default, it's
 * initialized to the below function, which retrieves from localforage.
 */
export let retrieveAuthToken = async () => {
  const auth: { idToken?: string } = await localforage.getItem('auth');
  return auth.idToken;
};

/**
 * If we want to override the above function, then we can this one.
 *
 * @param newFunc - The new function to override `retrieveAuthToken` with.
 * @example
 * ```javascript
 * setRetrieveAuthToken(() => Promise.resolve('myToken'));
 *
 * retrieveAuthToken().then(console.log); // Logs 'myToken'
 * ```
 */
export const setRetrieveAuthToken = (newFunc: () => Promise<string>) =>
  (retrieveAuthToken = newFunc);
