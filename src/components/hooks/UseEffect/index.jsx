import "./index.css";
import { useEffect, useState } from "react";
export const ReactUseEffect = () => {
  //   const [count, setCount] = useState(0);
  const [date, setDate] = useState("");

  useEffect(() => {
    setInterval(() => {
      const UpdatedDate = new Date();
      setDate(UpdatedDate.toLocaleTimeString());
      console.log(UpdatedDate);
    }, 1000);

    // return () => clearInterval(interval);
  }, []);

  //   useEffect(() => {
  //     console.log("Hello UseEffect : ", {count});
  //   }, [count]);
  return (
    <>
      <div>
        <h1 className="text-4xl">Hello UseEffect</h1>
        {/* <p className="text-4xl">Count : {count}</p>
        <button className="text-4xl" onClick={() => setCount(count + 1)}>
          Click
        </button> */}

        <h1>Date : {date}</h1>
      </div>
    </>
  );
};
