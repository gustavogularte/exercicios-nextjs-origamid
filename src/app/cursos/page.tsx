import Link from 'next/link';
import { CursosType } from './cursos.types';
import { getCursos } from './api/api';

export default async function CursosPage() {
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
