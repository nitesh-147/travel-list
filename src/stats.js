export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list🚀</em>
      </footer>
    );

  const numOfItems = items.length;
  const packedItems = items.filter((item) => item.packed === true).length;
  let percent = Math.round((packedItems / numOfItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percent === 100 ? (
          <p>You got everything! Ready to go✈️</p>
        ) : (
          <p>
            💼You have {numOfItems} items in your list and You have already
            Packed {packedItems} ({percent}%).
          </p>
        )}
      </em>
    </footer>
  );
}
