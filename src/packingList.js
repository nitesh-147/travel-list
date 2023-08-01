import { useState } from "react";
import { Item } from "./item";

function PackingList({ itemList, onDeleteItems, onToggleItems, clearList }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItemlist;
  if (sortBy === "input") sortedItemlist = itemList;
  if (sortBy === "description")
    sortedItemlist = itemList
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItemlist = itemList
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItemlist.map((item) => (
          <Item
            item={item}
            onDeleteItems={onDeleteItems}
            onToggleItems={onToggleItems}
            key={item.id}
          ></Item>
        ))}
      </ul>

      <div className="actions">
        <select
          name=""
          id=""
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort by Input Order</option>
          <option value="description"> Sort by description</option>
          <option value="packed">sort by Packed Status</option>
        </select>
        <button onClick={clearList}>Clear list</button>
      </div>
    </div>
  );
}

export default PackingList;
