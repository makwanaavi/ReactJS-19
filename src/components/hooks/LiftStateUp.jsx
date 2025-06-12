import { useState } from "react";

function LiftStateUp() {
  const [Input, setInput] = useState("");
  return (
    <>
      <InputComponents Input={Input} setInput={setInput} />
      <DisplayComponents Input={Input} />
    </>
  );
}

export default LiftStateUp;

export const InputComponents = ({ Input, setInput }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter Your Name"
        value={Input}
        onChange={(e) => setInput(e.target.value)}
      />
    </>
  );
};

export const DisplayComponents = ({ Input }) => {
  console.log(Input);
  return <p>The Current input value is : {Input}</p>;
};
