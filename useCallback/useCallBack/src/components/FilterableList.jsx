import React from "react";
import { useFilter } from "../hooks/useFilter";
import ItemList from "./ItemList";

function FilterableList() {
  const { filteredItems, filterItems } = useFilter();

  return (
    <div>
      <h1>Lista de Elementos</h1>
      <ItemList items={filteredItems} onFilter={filterItems} />
    </div>
  );
}

export default FilterableList;
