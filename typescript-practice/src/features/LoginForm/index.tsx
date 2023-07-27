import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Button, Input, Logo, Toast, FormGroup } from '@/components';

import { ROUTES } from '@/constants';

import { useAuth, useToast } from '@/contexts';

import { findUserByEmail } from '@/services';

import { validateInputForm } from '@/helpers';

import { LoginParams } from '@/interfaces';

import './index.css';

const initialErrorMsgs: LoginParams = {
  email: '',
  password: '',
  form: '',
};

const initialInput: LoginParams = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const [errorMessage, setErrorMessage] =
    useState<LoginParams>(initialErrorMsgs);
  const [inputValue, setInputValue] = useState<LoginParams>(initialInput);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { toast, showToast } = useToast();
  const { setUserData } = useAuth();

  const handleInputValue = (value: string, name: string) => {
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleClose = () => {
    showToast({ ...toast, hasPopup: false });
  };

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();

      setLoading(true);

      // Check validation input
      const { fieldErrors, hasError } =
        validateInputForm<LoginParams>(inputValue);

      setErrorMessage(fieldErrors);

      // Check data user
      if (!hasError) {
        // const dataUser = await getUserByEmail(inputValue.email);
        const dataUser = findUserByEmail(inputValue.email);

        // if (
        //   Object.keys(dataUser).length !== 0 &&
        //   dataUser.password === inputValue.password
        // )
        if (dataUser && dataUser.password === inputValue.password) {

          // console.log(dataUser);
          
          const user = {
            id: dataUser.id,
            name: dataUser.name,
            email: dataUser.email,
          };

          setUserData(user);

          localStorage.setItem('auth', user.id);

          navigate(ROUTES.HOMEPAGE);
        } else {
          setErrorMessage({
            ...initialErrorMsgs,
            form: 'Incorrect email or password.',
          });
        }
      }
    } catch (error) {
      showToast({
        hasPopup: true,
        status: 'error',
        message: `Login Fail. Please try again ${error}`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <header className="login header">
        <Logo />
      </header>
      <main className="login main">
        <h2 className="form-login-heading">Login</h2>
        <FormGroup className="form-login" onSubmit={handleLogin}>
          <Input
            label="Email:"
            type="text"
            name="email"
            className="input-form input-email"
            placeholder="minhng@gmail.com"
            onChange={handleInputValue}
            errorMessage={errorMessage.email}
          />

          <Input
            label="Password:"
            type="password"
            name="password"
            className="input-form input-password"
            placeholder="Enter your password."
            errorMessage={errorMessage.password}
            onChange={handleInputValue}
          />

          {errorMessage.form && (
            <p className="error-message">{errorMessage.form}</p>
          )}

          {loading ? (
            <Button type="button" className="btn-login btn-loading" isDisabled>
              Loading...
            </Button>
          ) : (
            <Button type="submit" className="btn-login btn-primary">
              Log In
            </Button>
          )}
        </FormGroup>

        <span className="form-message">
          Already have an account?{' '}
          <Link to={ROUTES.SIGNUP} className="open-sign-up-page">
            Sign up
          </Link>
        </span>
        {toast.hasPopup && (
          <Toast
            status={toast.status}
            message={toast.message}
            onClose={handleClose}
          />
        )}
      </main>
    </>
  );
};
