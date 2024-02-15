import React, { useState } from 'react';

const Formulario = () => {
  const [numero, setNumero] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Enviar el número a la función para calcular el término de la serie.
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" value={numero} onChange={(e) => setNumero(e.target.value)} />
      <button type="submit">Calcular</button>
    </form>
  );
};

export default Formulario;
