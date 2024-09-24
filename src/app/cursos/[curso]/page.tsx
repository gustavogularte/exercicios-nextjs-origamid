import Link from 'next/link';

type Aula = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  curso_id: number;
  tempo: number;
  ordem: number;
};

type CursoType = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  total_aulas: number;
  total_horas: number;
  aulas: Aula[];
};

type Params = {
  params: {
    curso: string;
  };
};

export default async function CursosPage({ params }: Params) {
  const response = await fetch(
    `https://api.origamid.online/cursos/${params.curso}`
  );
  const curso = (await response.json()) as CursoType;
  console.log(curso);

  return (
    <main>
      <h1>{curso.nome}</h1>
      <p>{curso.descricao}</p>
      <h2>Aulas</h2>
      <ul>
        {curso.aulas.map((aula) => (
          <li key={aula.id}>
            <Link href={'cursos/' + curso.slug + '/' + aula.slug}>{aula.nome}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
