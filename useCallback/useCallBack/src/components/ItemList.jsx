import React from "react";

function ItemList({ items, onFilter }) {
  return (
    <div>
      <button onClick={() => onFilter("fruit")}>Mostrar Frutas</button>
      <button onClick={() => onFilter("vegetable")}>Mostrar Verduras</button>

      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
