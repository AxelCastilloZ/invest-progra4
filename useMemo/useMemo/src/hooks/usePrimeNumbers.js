import { useMemo } from "react";

// Función para verificar si un número es primo
const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

// Hook para generar números primos hasta un número máximo
export function usePrimeNumbers(maxNumber) {
  const primes = useMemo(() => {
    const primesList = [];
    for (let i = 2; i <= maxNumber; i++) {
      if (isPrime(i)) {
        primesList.push(i);
      }
    }
    return primesList;
  }, [maxNumber]); // Solo vuelve a calcular cuando maxNumber cambia

  return primes;
}
