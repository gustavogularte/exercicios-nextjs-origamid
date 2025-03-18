import Login from '@/components/Login/Login';
import { cookies } from 'next/headers';

type Conta = {
  autorizado: boolean;
  usuario: string;
};

export default async function LoginPage() {
  let conta: Conta = {
    autorizado: false,
    usuario: '',
  };
  const token = (await cookies()).get('token')?.value;
  console.log(token)
  const response = await fetch('https://api.origamid.online/conta/perfil', {
    method: 'GET',
    headers: {
      authorization: 'Bearer ' + token,
    },
  });
  if (response.ok) {
    conta = await response.json() as Conta
  }

  return (
    <main>
      {conta.autorizado ? <button>{conta.usuario}</button> : <button>Login</button>}
      <h1>Login</h1>
      <Login />
    </main>
  );
}
