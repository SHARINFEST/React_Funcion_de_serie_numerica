import React, { useState } from 'react';
import Serie from './Serie';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';

const App = () => {
  const [numero, setNumero] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Enviar el número a la función para calcular el término de la serie.
  };

  return (
    <div>
      <Formulario onSubmit={handleSubmit} />
      <Resultado numero={numero} />
    </div>
  );
};

export default App;

