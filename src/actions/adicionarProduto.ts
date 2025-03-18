'use server'

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export type Produto = {
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: 0 | 1;
};

export default async function adicionarProduto({
  nome,
  preco,
  descricao,
  estoque,
  importado,
}: Produto) {
  await fetch('https://api.origamid.online/produtos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nome,
      preco,
      descricao,
      estoque,
      importado,
    }),
  });
  revalidatePath('/produtos');
  redirect('/produtos');
}
