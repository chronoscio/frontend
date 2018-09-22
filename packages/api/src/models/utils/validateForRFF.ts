import { ValidationError } from 'yup';

/**
 * Generic function to validate values against a model, and, in case of error,
 * return an error object that is compatible with react-final-form, instead of
 * throwing.
 *
 * TODO: Not sure if @chronoscio/api is the best places for this function. If
 * we create a @chronoscio/utils packages, then this function should go there.
 *
 * @param Model - The model to validate the values against.
 */
export const validateForRFF = (Model: any) => async (values: object) => {
  try {
    await Model.validate(values, { abortEarly: false });
  } catch (err) {
    return err.inner.reduce(
      (
        allErrors: { [key: string]: string | string[] },
        currentError: ValidationError
      ) => {
        // Look if the path of currentError is a field array or not. In the
        // case it's a field array (e.g. links[0] or references[1]), we know
        // there's a '[' sign.
        const matches = currentError.path.includes('[');
        if (matches) {
          const [field] = currentError.path.split('[');
          allErrors[field] = allErrors[field] || [];
          (allErrors[field] as string[]).push(currentError.message);
        } else {
          allErrors[currentError.path] = currentError.message;
        }
        return allErrors;
      },
      {}
    );
  }
};
