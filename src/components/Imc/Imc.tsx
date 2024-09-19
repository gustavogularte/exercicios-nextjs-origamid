'use client';

import React from 'react';
import Input from '../Input/Input';

const Imc = () => {
  const [peso, setPeso] = React.useState('');
  const [altura, setAltura] = React.useState('');
  const [imc, setImc] = React.useState<number | null>(null);

  function calcularImc(event: React.FormEvent) {
    event.preventDefault();
    const imc = +peso / ((+altura/100) * (+altura/100));
    setImc(imc);
  }

  return (
    <article>
      <form onSubmit={calcularImc}>
        <Input
          label="Peso(kg)"
          id="peso"
          type="number"
          setValue={setPeso}
          value={peso}
        />
        <Input
          label="Altura(cm)"
          id="altura"
          type="number"
          setValue={setAltura}
          value={altura}
        />
        <button>Calcular</button>
      </form>
      <p>Seu IMC: {imc}</p>
    </article>
  );
};

export default Imc;
