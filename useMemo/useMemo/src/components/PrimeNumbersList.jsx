import React, { useState } from "react";
import { usePrimeNumbers } from "../hooks/usePrimeNumbers";

function PrimeNumbersList() {
  const [maxNumber, setMaxNumber] = useState(10); // Número máximo para generar primos
  const primes = usePrimeNumbers(maxNumber);

  return (
    <div>
      <h2>Lista de Números Primos</h2>
      <input
        type="number"
        value={maxNumber}
        onChange={(e) => setMaxNumber(Number(e.target.value))}
      />
      <ul>
        {primes.map((prime, index) => (
          <li key={index}>{prime}</li>
        ))}
      </ul>
    </div>
  );
}

export default PrimeNumbersList;
