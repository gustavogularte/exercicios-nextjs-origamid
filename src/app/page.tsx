import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Lista de Exercícios</h1>
      <h2>Exercício 1</h2>
      <Link href={'/imc'}>IMC</Link>
      <h2>Exercício 2</h2>
      <Link href={'/cursos'}>Cursos</Link>
      <h2>Exercício 3</h2>
      <Link href={'/login'}>Login</Link>
      <h2>Exercício 4.</h2>
    </main>
  );
}
