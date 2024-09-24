import { AulaParamsType, AulaType } from '../../cursos.types';

export default async function AulaPage({ params }: AulaParamsType) {
  const response = await fetch(
    `https://api.origamid.online/cursos/${params.curso}/${params.aula}`
  );
  const aula = (await response.json()) as AulaType;

  return (
    <main>
      <h1>{aula.nome}</h1>
      <p>{aula.descricao}</p>
    </main>
  );
}
