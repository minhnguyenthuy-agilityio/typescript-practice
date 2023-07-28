import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { Button, Input, Logo, FormGroup } from '@/components';

import { addUser, findUserByEmail, createCart } from '@/services';

import { validateInputForm } from '@/helpers';

import { useAuth } from '@/contexts';

import { ROUTES } from '@/constants';

import { SignUpParams } from '@/interfaces';

import './index.css';

const initialErrorMsgs: SignUpParams = {
  email: '',
  name: '',
  password: '',
  form: '',
};

const initialInput: SignUpParams = {
  email: '',
  name: '',
  password: '',
};

export const SignUpForm = () => {
  const [errorMessage, setErrorMessage] = useState<
    SignUpParams | Record<string, string>
  >(initialErrorMsgs);
  const [inputValue, setInputValue] = useState<SignUpParams>(initialInput);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { setUserData } = useAuth();

  const handleInputValue = (value: string, name: string) => {
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSignUp = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();

      setLoading(true);

      // Check validation input
      const { fieldErrors, hasError } =
        validateInputForm<SignUpParams>(inputValue);

      setErrorMessage(fieldErrors);

      if (!hasError) {
        // Check email already exists
        const dataUser = findUserByEmail(inputValue.email);

        if (dataUser) {
          // Show error if email already exists
          setErrorMessage((preMsg) => ({
            ...preMsg,
            form: 'Email is already in use. Please try another one.',
          }));
        } else {
          // Send data to API to create new users
          const newUser = {
            id: uuidv4(),
            name: inputValue.name || '',
            email: inputValue.email || '',
            password: inputValue.password || '',
          };

          const newCart = {
            id: newUser.id,
            products: [],
          };

          addUser(newUser);
          createCart(newCart);

          const user = {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
          };

          setUserData(user);
          localStorage.setItem('auth', user.id);
          navigate(ROUTES.HOMEPAGE);
        }
      }
    } catch (error) {
      alert(`Registration Fail. Please try again ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <header className="sign-up header">
        <Logo />
      </header>
      <main className="sign-up main">
        <h2 className="form-sign-up-heading">Register</h2>
        <FormGroup className="form-sign-up" onSubmit={handleSignUp}>
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
            label="Name:"
            type="text"
            name="name"
            className="input-form input-name"
            placeholder="Minh Nguyen"
            onChange={handleInputValue}
            errorMessage={errorMessage.name}
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
            <Button
              type="button"
              className="btn-sign-up btn-loading"
              isDisabled
            >
              Loading...
            </Button>
          ) : (
            <Button type="submit" className="btn-sign-up btn-primary">
              Sign Up
            </Button>
          )}
        </FormGroup>

        <span className="form-message">
          Already have an account?{' '}
          <Link to={ROUTES.LOGIN} className="open-login-page">
            Log in
          </Link>
        </span>
      </main>
    </>
  );
};
