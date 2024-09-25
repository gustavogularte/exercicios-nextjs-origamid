import { AulaType, CursosType, CursoType } from '../cursos.types';

export async function getCursos() {
  const response = await fetch('https://api.origamid.online/cursos');
  return (await response.json()) as CursosType[];
}

export async function getCurso(curso: string) {
  const response = await fetch(`https://api.origamid.online/cursos/${curso}`);
  return (await response.json()) as CursoType;
}

export async function getAula(curso: string, aula: string) {
  const response = await fetch(
    `https://api.origamid.online/cursos/${curso}/${aula}`
  );
  return (await response.json()) as AulaType;
}
