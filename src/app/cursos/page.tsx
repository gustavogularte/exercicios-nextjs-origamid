import Link from 'next/link';
import React from 'react';
import { getCursos } from '@/api/cursos';

export default async function cursosPage() {
  const cursos = await getCursos();

  return (
    <main>
      <h1>Cursos</h1>
      <ul>
        {cursos.map((curso) => (
          <li key={curso.id}>
            <Link href={`cursos/${curso.slug}`}>{curso.nome}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
