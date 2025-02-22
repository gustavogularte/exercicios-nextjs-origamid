import React from 'react';

type Curso = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  total_aulas: number;
  total_horas: number;
};

export default async function cursosPage() {
  const api = await fetch('https://api.origamid.online/cursos');
  const cursos = (await api.json()) as Curso[];
  console.log(cursos);

  return (
    <main>
      <h1>Cursos</h1>
      <ul>
        {cursos.map((curso) => (
          <li key={curso.id}>{curso.nome}</li>
        ))}
      </ul>
    </main>
  );
}
