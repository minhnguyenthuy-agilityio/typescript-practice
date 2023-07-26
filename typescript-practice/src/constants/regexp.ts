const REGEXP = {
  EMAIL: /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z0-9-]+(?:\.[a-z]{2,10}){1,2}$/,
  PASSWORD: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,10}$/,
  NAME:
    /^(([A-Za-z]+[\\-\\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\\-\\']?)*([A-Za-z]+)?$/,
};

export { REGEXP };
