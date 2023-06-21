'use client'
import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export default function Candidatos() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  // Adicione mais estados conforme necessário para os outros campos

  const handleSubmit = (e: any ) => {
    e.preventDefault();

    // Lógica de submissão do formulário aqui
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nome">Nome</label>
        <InputText id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
      </div>

      <div>
        <label htmlFor="idade">Idade</label>
        <InputText id="idade" value={idade} onChange={(e) => setIdade(e.target.value)} />
      </div>

      {/* Mais campos de formulário aqui */}

      <Button label="Submit" type="submit" />
    </form>
  );
}
