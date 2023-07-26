import { REGEXP, ERROR_MESSAGES } from '@/constants';

import { SignUpParams, LoginParams } from '@/interfaces';

interface ValidationResult<T> {
  fieldErrors: T;
  hasError: boolean;
}

/* Check validate */
const validateInputForm = <T>(
  dataInput: LoginParams | SignUpParams
): ValidationResult<T> => {
  let fieldErrors: T = {} as T;
  let error: Record<string, boolean> = {};

  Object.entries(dataInput).forEach(([key, value]) => {
    // If the data is empty, an error message is returned
    if (!value) {
      fieldErrors = { ...fieldErrors, [key]: ERROR_MESSAGES.FIELD_EMPTY };
      error = { ...error, [key]: true };
    }
    // If the data does not match the corresponding REGEXP, an error message will be returned
    else if (!REGEXP[key.toUpperCase() as keyof typeof REGEXP].test(value)) {
      fieldErrors = {
        ...fieldErrors,
        [key]:
          ERROR_MESSAGES[
            `${key.toUpperCase()}_INVALID` as keyof typeof ERROR_MESSAGES
          ],
      };
      error = { ...error, [key]: true };
    }
  });

  return {
    fieldErrors,
    hasError: error.email || error.password || error.name,
  };
};

export { validateInputForm };
