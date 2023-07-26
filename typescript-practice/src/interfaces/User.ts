export interface User {
  id: string;
  name: string;
  email: string;
}

export interface SignUpParams extends Omit<User, 'id'> {
  password: string;
  form?: string;
}

export interface LoginParams {
  email: string;
  password: string;
  form?: string;
}

export interface UserWithPassword extends User {
  password: string;
}
