import { Aula, Curso } from '@/app/cursos/[cursoId]/curso.types';
import { CursosTypes } from '@/app/cursos/cursos.types';

export async function cursosApi() {
  const api = await fetch('https://api.origamid.online/cursos');
  const cursos = (await api.json()) as CursosTypes[];
  return cursos;
}

export async function cursoApi(cursoSlug: string) {
  const api = await fetch(`https://api.origamid.online/cursos/${cursoSlug}`);
  const curso = (await api.json()) as Curso;
  return curso;
}

export async function AulaApi(aulaSlug: string) {
  const api = await fetch(`https://api.origamid.online/cursos/${aulaSlug}`);
  const aulas = (await api.json()) as Aula;
  return aulas;
}