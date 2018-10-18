import { config } from '../../config';

type Fn<T> = () => Promise<T>;

/**
 * Runs function, and logs error if there are errors.
 *
 * @param fn - The function to run.
 */
export async function returnResponse<T>(fn: Fn<T>): Promise<T> {
  try {
    return await fn();
  } catch (err) {
    config.onError(err);
  }
}
