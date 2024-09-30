'use client';
import React, { FormEvent } from 'react';
import Input from '../Input/Input';

const Login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  async function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = await fetch('api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
  }

  return (
    <form onSubmit={login}>
      <Input id="username" label="username" setValue={setUsername} />
      <Input id="password" label="password" setValue={setPassword} />
      <button>Login</button>
    </form>
  );
};

export default Login;
