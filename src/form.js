import { useState } from "react";
export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newObj = { description, quantity, id: Date.now(), packed: false };

    onAddItems(newObj);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Add your items: </h3>
      <select
        name=""
        id=""
        value={quantity}
        onChange={(e) => {
          setQuantity(Number(e.target.value));
        }}
        required
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        name=""
        id=""
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        placeholder="Item..."
        required
      />

      <button>Add</button>
    </form>
  );
}
