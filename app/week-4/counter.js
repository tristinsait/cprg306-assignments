export default function Counter({currentCount, incrementCounterFunction, decrementCounterFunction}) {

    let incrBtnDisabled = false;
    if(currentCount >= 20){
        incrBtnDisabled = true;
    }

    let decrBtnDisabled = false;
    if(currentCount <= 1){
        decrBtnDisabled = true;
    }

    let btnStyles = "bg-pink-300 text-black font-bold rounded py-2 px-4 mt-5 mr-1.5 ml-1.5 hover:bg-pink-200 active:bg-pink-400 disabled:bg-purple-300"

    return (
        <main>
            <div className="container w-48 bg-pink-800 p-5 rounded content-center text-center">
                <div className="">
                    <p className="text-3xl font-bold">{currentCount}</p>
                    <button className={btnStyles} onClick={decrementCounterFunction} disabled={decrBtnDisabled}>-</button>
                    <button className={btnStyles} onClick={incrementCounterFunction} disabled={incrBtnDisabled}>+</button>
                </div>
            </div>
        </main>
    );
}