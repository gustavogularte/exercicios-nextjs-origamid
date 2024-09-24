import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>Home</h1>
      <ul>
        <li><Link href='/imc'>Calcule seu imc aqui</Link></li>
        <li><Link href='/cursos'>Veja cursos</Link></li>
      </ul>
    </main>
  );
}
