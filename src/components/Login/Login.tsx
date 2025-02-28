'use client'
import React from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button';

export default function Login() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  async function logar() {
    
  }

  return (
    <article>
      <Input label='Username' id='username' type='text' setValue={setUsername} value={username}/>
      <Input label='Password' id='password' type='text' setValue={setPassword} value={password}/>
      <Button onClick={logar}>LogaRr</Button>
    </article>
  )
}
