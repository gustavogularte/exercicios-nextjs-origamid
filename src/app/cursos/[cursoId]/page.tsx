import React from 'react';
import { PageParams } from './curso.types';
import { cursoApi } from '@/api/cursos';
import Link from 'next/link';

export default async function cursoPage({ params }: PageParams) {
  const { cursoId } = await params;
  const curso = await cursoApi(cursoId.toLowerCase());

  return (
    <main>
      <h1>Curso de {curso.nome}</h1>
      <ul>
        {curso.aulas.map((aula) => (
          <li key={aula.id}><Link href={`cursos/${curso.slug}/${aula.slug}`}>{aula.nome}</Link></li>
        ))}
      </ul>
    </main>
  );
}
