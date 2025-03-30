import { useState, useCallback } from "react";

export function useFilter() {
  const [items, setItems] = useState([
    { id: 1, name: "Apple", category: "fruit" },
    { id: 2, name: "Carrot", category: "vegetable" },
    { id: 3, name: "Banana", category: "fruit" },
    { id: 4, name: "Lettuce", category: "vegetable" },
  ]);

  const [filteredItems, setFilteredItems] = useState(items);

  // Memoriza la función de filtrado usando useCallback
  const filterItems = useCallback((category) => {
    setFilteredItems(items.filter(item => item.category === category));
  }, [items]); // Solo se vuelve a crear si 'items' cambia

  return { filteredItems, filterItems };
}
