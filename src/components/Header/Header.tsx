import { cookies } from 'next/headers';
import Link from 'next/link';
import React from 'react';

const Header = async () => {
  let login = {
    autorizado: false,
    usuario: ''
  }
  const token = cookies().get('token');
  const response = await fetch('https://api.origamid.online/conta/perfil', {
    headers: {
      Authorization: 'Bearer ' + token?.value
    }
  })
  if (response.ok) {
    login = await response.json()
  }

  return (
    <header>
      <ul className="menu">
      <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/imc">Calcule seu imc aqui</Link>
        </li>
        <li>
          <Link href="/cursos">Veja cursos</Link>
        </li>
        <li>
          {login.autorizado ? login.usuario : <Link href="/login">Faça login</Link>}
        </li>
      </ul>
    </header>
  );
};

export default Header;
