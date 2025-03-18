import { getAula } from '@/api/cursos';

type ParamsTypes = {
  params: {
    curso: string;
    aula: string;
  };
};

export default async function AulasPage({ params }: ParamsTypes) {
  const aula = await getAula(params.curso, params.aula);

  return (
    <main>
      <h1>{aula.nome}</h1>
      <p>Descrição: {aula.descricao}</p>
      <p>Duração: {aula.tempo}</p>
    </main>
  );
}
