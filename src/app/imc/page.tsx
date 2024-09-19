import Imc from "@/components/Imc/Imc";
import Link from "next/link"

export default function ImcPage() {
  return (
    <main>
      <Link href='/'>Voltar para home</Link>
      <h1>Calcule seu imc</h1>
      <Imc />
    </main>
  );
}