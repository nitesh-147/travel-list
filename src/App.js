import { useState } from "react";
import Logo from "./logo";
import Form from "./form";
import PackingList from "./packingList";
import Stats from "./stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(newObj) {
    setItems((e) => [...e, newObj]);
  }

  function handleDeleteItems(id) {
    setItems((e) => e.filter((x) => x.id !== id));
  }

  function handleToggle(id) {
    setItems((item) =>
      item.map((e) => (e.id === id ? { ...e, packed: !e.packed } : e))
    );
  }
  function clearList() {
    const confirmed = window.confirm("Are you sure want to delete all items?");
    if (confirmed) {
      setItems([]);
    }
  }

  return (
    <div className="app">
      <Logo></Logo>
      <Form onAddItems={handleAddItems}></Form>
      <PackingList
        itemList={items}
        onDeleteItems={handleDeleteItems}
        onToggleItems={handleToggle}
        clearList={clearList}
      ></PackingList>
      <Stats items={items}></Stats>
    </div>
  );
}


