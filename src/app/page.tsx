import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Lista de Exercícios</h1>
      <Link href={'/imc'}>IMC</Link>
    </main>
  );
}
