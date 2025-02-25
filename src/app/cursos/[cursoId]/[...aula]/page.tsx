import { AulaApi } from '@/api/cursos';
import React from 'react';

type ParamsTypes = {
  params: {
    aula: string[]
  }
}

export default async function AulasPage({ params }: ParamsTypes) {
  const aulaSlug = await params.aula.join('/')
  const aula = await AulaApi(aulaSlug)
  console.log(aula);

  return (
    <main>
      <h1>{aula.nome}</h1>
      <p>Descrição: {aula.descricao}</p>
      <p>Duração: {aula.tempo}</p>
    </main>
  );
}
