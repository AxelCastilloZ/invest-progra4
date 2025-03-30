import { useCounter } from "../hooks/useCounter";

function Counter() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={increment}>➕ Incrementar</button>
      <button onClick={decrement}>➖ Decrementar</button>
      <button onClick={reset}>🔄 Reiniciar</button>
    </div>
  );
}

export default Counter;
