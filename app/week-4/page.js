"use client"

import { useState } from "react";
import Counter from "./counter";

export default function AdvCounterPage(){

    const [count, setCount] = useState(1);

    const incrementCounter = () => {
        if(count < 20) (
            setCount(count + 1)
        );
    }
    const decrementCounter = () => {
        if(count > 1) (
            setCount(count - 1)
        );
    }

    return(
        <main className="p-5 content-center text-center">
            <Counter
                currentCount={count}
                incrementCounterFunction={incrementCounter}
                decrementCounterFunction={decrementCounter}
            />
        </main>
    )
}