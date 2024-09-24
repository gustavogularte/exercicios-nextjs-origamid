import Link from 'next/link';
import { CursosType } from './cursos.types';

export default async function CursosPage() {
  const response = await fetch('https://api.origamid.online/cursos');
  const cursos = (await response.json()) as CursosType[];

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
