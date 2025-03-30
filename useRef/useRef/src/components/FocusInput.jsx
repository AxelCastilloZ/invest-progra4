import { useRef } from "react";

function FocusInput() {
 
  const inputRef = useRef();

 
  const focusInput = () => {
    
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>Enfocar un campo de texto con useRef</h2>
      <input
        ref={inputRef} 
        type="text"
        placeholder="Haz clic en el botón para enfocarme"
      />
      <button onClick={focusInput}>Enfocar Input</button>
    </div>
  );
}

export default FocusInput;
