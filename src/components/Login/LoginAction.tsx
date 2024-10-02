'use client';
import React, { FormEvent } from 'react';
import Input from '../Input/Input';
import { login } from '@/app/actions/login';
import { getCookies } from '@/app/actions/cookies';

const LoginAction = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [token, setToken] = React.useState('');

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    login(username, password);
  }

  async function showToken() {
    const token = await getCookies('token');
    setToken(token);
  }

  return (
    <>
      <form onSubmit={handleLogin}>
        <Input id="username" label="username" setValue={setUsername} />
        <Input id="password" label="password" setValue={setPassword} />
        <button>Login</button>
      </form>
      <button onClick={showToken}>Mostrar token</button>
      <p>{token}</p>
    </>
  );
};

export default LoginAction;
