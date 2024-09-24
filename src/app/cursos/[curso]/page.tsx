import Link from 'next/link';
import { CursoParamsType, CursoType } from '../cursos.types';

export default async function CursoPage({ params }: CursoParamsType) {
  const response = await fetch(
    `https://api.origamid.online/cursos/${params.curso}`
  );
  const curso = (await response.json()) as CursoType;

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
