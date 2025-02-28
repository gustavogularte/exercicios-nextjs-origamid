'use client';
import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

export default function Login() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  async function logar() {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const data = await response.json();
    if (!data.authorization) setError(data.message);
  }

  return (
    <article>
      <Input
        label="Username"
        id="username"
        type="text"
        setValue={setUsername}
        value={username}
      />
      <Input
        label="Password"
        id="password"
        type="text"
        setValue={setPassword}
        value={password}
      />
      <Button onClick={logar}>Logar</Button>
      {error ?? <p>{error}</p>}
    </article>
  );
}
