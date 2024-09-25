import Link from 'next/link';
import { CursoParamsType, CursoType } from '../cursos.types';
import { getCurso } from '../api/api';

export default async function CursoPage({ params }: CursoParamsType) {
  const curso = await getCurso(params.curso);

  return (
    <main>
      <h1>{curso.nome}</h1>
      <p>{curso.descricao}</p>
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
