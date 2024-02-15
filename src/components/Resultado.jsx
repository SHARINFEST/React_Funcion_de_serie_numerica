import React from 'react';
import Serie from '../Serie';

const Resultado = ({ numero }) => {
  // Creamos una instancia de la clase `Serie`.
  const serie = new Serie();

  // Calculamos el término de la serie para el número `numero`.
  const resultado = serie.serie(numero);

  return (
    <div>
      El resultado del cálculo es: {resultado}
    </div>
  );
};

export default Resultado;
