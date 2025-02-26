import { AulaTypes, CursosTypes, CursoTypes } from '@/app/cursos/cursos.types';

export async function getCursos() {
  const api = await fetch('https://api.origamid.online/cursos');
  return (await api.json()) as CursosTypes[];
}

export async function getCurso(curso: string) {
  const api = await fetch(`https://api.origamid.online/cursos/${curso}`);
  return (await api.json()) as CursoTypes;
}

export async function getAula(curso: string, aula: string) {
  const api = await fetch(
    `https://api.origamid.online/cursos/${curso}/${aula}`
  );
  return (await api.json()) as AulaTypes;
}
