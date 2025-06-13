import { useState } from "react";

function UseState() {
  const [Count, setCount] = useState(0);
  const [step, setStep] = useState("");

  const handleIncrement = () => {
    setCount(Count + step);
  };

  const handleDecrement = () => {
    setCount(Count - step);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className=" rounded-2xl p-8 shadow-xl w-full max-w-md">
        <div className="p-6 rounded-2xl  max-w-xl mx-auto mt-10">
          <h1 className="text-5xl font-extrabold text-pink-500 text-center mb-6">
            UseState Hook
          </h1>

          <div className="text-center text-xl font-medium text-pink-600 mb-4">
            Count: <span className="font-bold">{Count}</span>
          </div>

          <div className="flex justify-center">
            <input
              type="number"
              value={step}
              placeholder="Enter something..."
              className="w-full max-w-md border-2 border-pink-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              onChange={(e) => setStep(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={handleIncrement}
            className="px-4 py-2 rounded-xl bg-pink-400 
            text-white font-semibold text-lg"
            disabled={Count >= 100}
          >
            Increment +
          </button>

          <button
            onClick={handleDecrement}
            className="px-4 py-2 rounded-xl bg-pink-400  text-white font-semibold text-lg"
            disabled={Count <= 0}
          >
            Decrement -
          </button>

          <button
            onClick={handleReset}
            className="px-4 py-2 rounded-xl bg-pink-400  text-white font-semibold text-lg"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default UseState;
