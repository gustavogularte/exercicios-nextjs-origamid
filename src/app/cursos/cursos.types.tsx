export type CursosType = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  total_aulas: number;
  total_horas: number;
};

export type CursoType = CursosType & {
  aulas: AulaType[];
};

export type AulaType = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  curso_id: number;
  tempo: number;
  ordem: number;
};

export type CursoParamsType = {
  params: {
    curso: string;
  };
};

export type AulaParamsType = {
  params: {
    curso: string;
    aula: string;
  };
};
