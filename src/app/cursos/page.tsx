import Link from 'next/link';

type CursoType = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  total_aulas: number;
  total_horas: number;
};

export default async function CursosPage() {
  const response = await fetch('https://api.origamid.online/cursos');
  const cursos = (await response.json()) as CursoType[];

  return (
    <main>
      <h1>Cursos</h1>
      <ul>
        {cursos.map((curso) => (
          <li key={curso.id}>
            <Link href={'cursos/' + curso.slug}>{curso.nome}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
