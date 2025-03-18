'use client';

import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

export default function Imc() {
  const [imc, setImc] = React.useState('');
  const [peso, setPeso] = React.useState('');
  const [altura, setAltura] = React.useState('');

  function calcularImc() {
    const imc = (+peso / ((+altura / 100) * (+altura / 100))).toFixed(2);
    setImc(imc);
  }

  return (
    <article>
      <form onSubmit={(e) => e.preventDefault()}>
        <Input
          id="peso"
          label="Peso(kg)"
          setValue={setPeso}
          value={peso}
          type="number"
        />
        <Input
          id="altura"
          label="Altura(cm)"
          setValue={setAltura}
          value={altura}
          type="number"
        />
        <Button onClick={calcularImc}>Calcular IMC</Button>
        <p>{imc}</p>
      </form>
    </article>
  );
}
