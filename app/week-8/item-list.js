"use client";

import React, { useState } from 'react';
import Item from './item';

const ItemList = ({ items, onItemSelect }) => {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  const sortedGroupedItems = Object.keys(groupedItems)
    .sort()
    .map((category) => ({
      category,
      items: groupedItems[category].sort((a, b) => a.name.localeCompare(b.name)),
    }));

  return (
    <div>
      <div className="space-x-2 mb-4">
        <button
          onClick={() => setSortBy('name')}
          className={`px-4 py-2 font-bold rounded ${sortBy === 'name' ? 'bg-pink-800 text-white' : 'bg-pink-600 text-white'}`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`px-4 py-2 font-bold rounded ${sortBy === 'category' ? 'bg-pink-800 text-white' : 'bg-pink-600 text-white'}`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setSortBy('grouped')}
          className={`px-4 py-2 font-bold rounded ${sortBy === 'grouped' ? 'bg-pink-800 text-white' : 'bg-pink-600 text-white'}`}
        >
          Group by Category
        </button>
      </div>

      <ul className="space-y-4">
        {sortBy === 'grouped' ? (
          sortedGroupedItems.map((group) => (
            <div key={group.category}>
              <h2 className="capitalize font-bold text-2xl">{group.category}</h2>
              <ul className="pl-4 space-y-1">
                {group.items.map((item) => (
                  <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                    onSelect={onItemSelect}
                  />
                ))}
              </ul>
            </div>
          ))
        ) : (
          sortedItems.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
              onSelect={onItemSelect}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default ItemList;
