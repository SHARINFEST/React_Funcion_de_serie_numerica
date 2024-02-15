class Serie {

    constructor() {}
  
    serie(n) {
      const numeroPrimo = this.numeroPrimo(n + 1);
      const numeroTriangular = this.numeroTriangular(n);
      const serieFibonacci = this.serieFibonacci(n + 1);
      return numeroPrimo - 2 * numeroTriangular + serieFibonacci;
    }
  
    numeroPrimo(n) {
      // Implementación del algoritmo para encontrar números primos.
    }
  
    numeroTriangular(n) {
      // Implementación del algoritmo para calcular números triangulares.
    }
  
    serieFibonacci(n) {
      // Implementación del algoritmo para calcular la serie de Fibonacci.
    }
  }
  

  export default Serie;
