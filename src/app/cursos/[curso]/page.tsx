import { getCurso } from '@/api/cursos';
import Link from 'next/link';
import { ParamsTypes } from '../cursos.types';

export default async function cursoPage({ params }: ParamsTypes) {
  const curso = await getCurso(params.curso);

  return (
    <main>
      <h1>Curso de {curso.nome}</h1>
      <p>Descrição: {curso.descricao}</p>
      <p>Duração: {curso.total_horas}</p>
      <p>Total de aulas: {curso.total_aulas}</p>
      <h2>Aulas</h2>
      <ul>
        {curso.aulas.map((aula) => (
          <li key={aula.id}>
            <Link href={`${curso.slug}/${aula.slug}`}>{aula.nome}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
