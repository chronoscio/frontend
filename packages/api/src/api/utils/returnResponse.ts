type Fn<T> = () => Promise<T>;

/**
 * Runs function, and logs error if there are errors.
 *
 * @param fn - The function to run.
 */
export function returnResponse<T>(fn: Fn<T>): Promise<T> {
  try {
    return fn();
  } catch (err) {
    console.error(err);
    throw err;
  }
}
