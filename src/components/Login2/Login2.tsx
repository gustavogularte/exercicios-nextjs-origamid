'use client';
import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { login } from '@/actions/login';
import getCookie from '@/actions/get-cookie';

export default function Login2() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [cookie, setCookie] = React.useState('');

  async function logar() {
    await login(username, password)
  }

  async function mostrarCookie() {
    const cookie = await getCookie('token');
    if (cookie) setCookie(cookie)
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
      <Button onClick={mostrarCookie}>Mostrar cookie</Button>
      {cookie ?? <p>{cookie}</p>}
    </article>
  );
}
