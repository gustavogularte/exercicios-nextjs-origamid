'use client';

import React from 'react';
import Input from '../Input/Input';
import adicionarProduto from '@/actions/adicionarProduto';
import Button from '../Button/Button';

export default function Adicionar() {
  const [nome, setNome] = React.useState('');
  const [preco, setPreco] = React.useState('');
  const [descricao, setDescricao] = React.useState('');
  const [estoque, setEstoque] = React.useState('');
  const [importado, setImportado] = React.useState(false);

  async function adicionar() {
    adicionarProduto({
      nome,
      preco: Number(preco),
      descricao,
      estoque: Number(estoque),
      importado: importado ? 0 : 1,
    });
  }

  return (
    <div>
      <Input
        id="nome"
        label="Nome"
        value={nome}
        setValue={setNome}
        type="text"
      />
      <Input
        id="preco"
        label="Preço"
        value={preco}
        setValue={setPreco}
        type="number"
      />
      <Input
        id="descricao"
        label="Descricao"
        value={descricao}
        setValue={setDescricao}
        type="text"
      />
      <Input
        id="estoque"
        label="Estoque"
        value={estoque}
        setValue={setEstoque}
        type="number"
      />
      <label htmlFor="importado">
        <input
          type="checkbox"
          checked={importado}
          onChange={() => setImportado((a) => !a)}
          id="importado"
          name="importado"
        />
        Importado
      </label>
      <Button onClick={adicionar}>Adicionar</Button>
    </div>
  );
}
