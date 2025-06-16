import { useEffect, useState } from "react";
import "./index.css";
export const EffectChallenge = () => {
  const [Count, setCount] = useState(0);
  const [Name, setName] = useState("Avi");

  useEffect(() => {
    document.title = `Count : ${Count}`;
    console.log("Title Chanage")
  }, [Count]);

  useEffect(() => {
    console.log(Name);  
  }, [Name]);

  return (
    <>
      <div className="container effect-container">
        <h1 className="text-4xl">Useeffect Challeange</h1>

        <p>
          Count : <span>{Count}</span>{" "}
        </p>
        <button onClick={() => setCount(Count + 1)}>Increament</button>

        <p>Name : {Name} </p>
        <input
          type="text"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </>
  );
};
