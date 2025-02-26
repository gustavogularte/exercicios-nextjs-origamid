export type ParamsTypes = {
  params: {
    curso: string;
  };
};

export type CursosTypes = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  total_aulas: number;
  total_horas: number;
};

export type AulaTypes = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  curso_id: number;
  tempo: number;
  ordem: number;
};

export type CursoTypes = CursosTypes & {
  aulas: AulaTypes[];
};
