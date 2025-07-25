import { useReducer } from "react";

export const Usereducre = () => {
  const reducer = (state, action) => {
    // if (action.type === "INCREMENT") {
    //   return state + 1;
    // }
    // if (action.type === "DECREMENT") {
    //   if (state > 0) {
    //     return state - 1;
    //   } else {
    //     return state;
    //   }
    // }
    // if(action.type === "RESET") return 0 ;

    switch (action.type) {
      case "INCREMENT":
        return state + 2;

      case "DECREMENT":
        return state > 0 ? state - 2 : state;

      case "RESET":
        return (state = 0);

      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1>UseReducer Count : {count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};
