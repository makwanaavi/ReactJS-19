import { forwardRef, useId, useRef } from "react";
import "./index.css";

export const ForwardRef = () => {
  const username = useRef(null);
  const password = useRef(null);

  const handleformSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username.current.value);
    console.log("Password:", password.current.value);
    localStorage.setItem(
      "UserData",
      JSON.stringify({
        username: username.current.value,
        password: password.current.value,
      })
    );
  };

  return (
    <>
      <form onSubmit={handleformSubmit}>
        <BeforReact19input label="Username" ref={username} />
        <BeforReact19input label="Password" ref={password} />
        <button type="submit" className="bg-pink-400 p-4">
          Login
        </button>
      </form>
    </>
  );
};

// eslint-disable-next-line react/display-name
const BeforReact19input = forwardRef((props, ref) => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>{props.label}</label>
      <input id={id} type="text" ref={ref} />
    </div>
  );
});
