"use client"

import { useState } from "react";
import Counter from "./counter";

export default function AdvCounterPage(){

    const [count, setCount] = useState(1);

    const [name, setName] = useState("");
    const [category, setCategory] = useState("Produce");

    const increment = () => {
        if(count < 20) (
            setCount(count + 1)
        );
    }
    const decrement = () => {
        if(count > 1) (
            setCount(count - 1)
        );
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const item = {
          name,
          quantity: count,
          category,
        };
        console.log("Item submitted:", item);

    alert(`Item Name: ${name}\nQuantity: ${count}\nCategory: ${category}`);

    setName("");
    setCount(1);
    setCategory("Produce");
  };

  return (
    <main className="p-5 content-center text-center">
      <Counter
        currentCount={count}
        incrementCounterFunction={increment}
        decrementCounterFunction={decrement}
        name={name}
        setName={setName}
        category={category}
        setCategory={setCategory}
        handleSubmit={handleSubmit}
      />
    </main>
  );
}