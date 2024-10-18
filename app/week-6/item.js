const Item = ({ name, quantity, category }) => {
  return (
    <li className="p-2 m-4 bg-slate-800 max-w-sm">
      <div className="text-2xl font-semibold">{name}</div>
      <div className="text-sm">Buy {quantity} in {category}</div>
    </li>
  );
};

export default Item;