import './index.css'
import { useRef } from "react";

export const UseRefs = () => {
  const username = useRef(null);
  const passowrd = useRef(null);

  console.log(username)

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value, passowrd.current.value);
  };
  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex justify-center items-center h-screen flex-col"
    >
      <input type="text" id="username" className="border" ref={username} />
      <br />
      <br />
      <input type="passowrd" id="Passowrd" className="border" ref={passowrd}/>
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
};
