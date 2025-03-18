import Link from 'next/link';

export type Produto = {
  id?: string;
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: 0 | 1;
};

export default async function produtosPage() {
  const response = await fetch(' https://api.origamid.online/produtos', {
    next: {
      revalidate: 5
    }
  });
  const produtos = (await response.json()) as Produto[];

  return (
    <main>
      <h1>Produtos</h1>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.nome}>{produto.nome}: R${produto.preco}</li>
        ))}
      </ul>
      <button><Link href={'produtos/adicionar'}>Adicionar</Link></button>
    </main>
  );
}
