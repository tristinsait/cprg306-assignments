import { useState } from 'react';

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('produce');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Math.random().toString(36),
      name,
      quantity,
      category: category.toLowerCase(),
    };
    onAddItem(newItem);
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <main className="content-center">
      <form onSubmit={handleSubmit} className="mt-5">
        <div className="container w-64 bg-pink-800 p-5 mb-3 rounded content-center text-center">
          <div className="mb-4">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-black p-2 border rounded w-full text-center"
              required
            />
          </div>

          <div className="flex items-center content-center justify-between space-x-4 bg-white rounded">
            <p className="text-black text-2xl pl-4 mr-18 font-bold">{quantity}</p>
            <div>
              <button
                type="button"
                className="bg-pink-300 text-black font-bold rounded py-2 px-4 mb-1.5 mt-1.5 mr-1.5 hover:bg-pink-200 active:bg-pink-400 disabled:bg-purple-300"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                -
              </button>
              <button
                type="button"
                className="bg-pink-300 text-black font-bold rounded py-2 px-4 mb-1.5 mt-1.5 mr-1.5 hover:bg-pink-200 active:bg-pink-400 disabled:bg-purple-300"
                onClick={() => setQuantity(Math.min(20, quantity + 1))}
                disabled={quantity >= 20}
              >
                +
              </button>
            </div>
          </div>

          <div className="mb-4">
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-black font-bold p-2 border rounded mt-5 w-full text-center"
            >
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozen foods">Frozen Foods</option>
              <option value="canned goods">Canned Goods</option>
              <option value="dry goods">Dry Goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-pink-300 text-black font-bold rounded w-full py-2 px-4 mt-2 hover:bg-pink-200 active:bg-pink-400"
          >
            +
          </button>
        </div>
      </form>
    </main>
  );
}
