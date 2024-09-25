import { getAula } from '../../api/api';
import { AulaParamsType, AulaType } from '../../cursos.types';

export default async function AulaPage({ params }: AulaParamsType) {
  const aula = await getAula(params.curso, params.aula);

  return (
    <main>
      <h1>{aula.nome}</h1>
      <p>{aula.descricao}</p>
    </main>
  );
}
