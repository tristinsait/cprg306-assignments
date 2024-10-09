export default function Counter({
    currentCount,
    incrementCounterFunction,
    decrementCounterFunction,
    name,
    setName,
    category,
    setCategory,
    handleSubmit,
  }) {

    let incrBtnDisabled = false;
    if (currentCount >= 20){
        incrBtnDisabled = true;
    }

    let decrBtnDisabled = false;
    if (currentCount <= 1){
        decrBtnDisabled = true;
    }

    let btnStyles = "bg-pink-300 text-black font-bold rounded py-2 px-4 mb-1.5 mt-1.5 mr-1.5 hover:bg-pink-200 active:bg-pink-400 disabled:bg-purple-300"

    return (
        <main className="content-center">
        <form onSubmit={handleSubmit} className="mt-5">
          <div className="container w-64 bg-pink-800 p-5 rounded content-center text-center">
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
                <p className="text-black text-2xl pl-4 mr-18 font-bold">{currentCount}</p>
                <div>
                    <button
                        type="button"
                        className={btnStyles}
                        onClick={decrementCounterFunction}
                        disabled={decrBtnDisabled}
                    >
                    -
                    </button>
                    <button
                        type="button"
                        className={btnStyles}
                        onClick={incrementCounterFunction}
                        disabled={incrBtnDisabled}
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
                  <option value="Produce">Produce</option>
                  <option value="Dairy">Dairy</option>
                  <option value="Bakery">Bakery</option>
                  <option value="Meat">Meat</option>
                  <option value="Frozen Foods">Frozen Foods</option>
                  <option value="Canned Goods">Canned Goods</option>
                  <option value="Dry Goods">Dry Goods</option>
                  <option value="Beverages">Beverages</option>
                  <option value="Snacks">Snacks</option>
                  <option value="Household">Household</option>
                  <option value="Other">Other</option>
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