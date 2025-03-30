import { useState, useCallback } from "react";

export function useFilter() {
  const [items, setItems] = useState([
    { id: 1, name: "Apple", category: "fruit" },
    { id: 2, name: "Carrot", category: "vegetable" },
    { id: 3, name: "Banana", category: "fruit" },
    { id: 4, name: "Lettuce", category: "vegetable" },
  ]);

  const [filteredItems, setFilteredItems] = useState(items);

 
  const filterItems = useCallback((category) => {
    setFilteredItems(items.filter(item => item.category === category));
  }, [items]); 

  return { filteredItems, filterItems };
}
