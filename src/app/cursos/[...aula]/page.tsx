import Link from 'next/link';

type AulaType = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  curso_id: number;
  tempo: number;
  ordem: number;
};

type Params = {
  params: {
    aula: string[];
  };
};

export default async function CursosPage({ params }: Params) {
  const response = await fetch(
    `https://api.origamid.online/${params.aula.join('/')}`
  );
  const aula = (await response.json()) as AulaType;
  console.log(aula);

  return (
    <main>
      <h1>{aula.nome}</h1>
      <p>{aula.descricao}</p>
    </main>
  );
}
