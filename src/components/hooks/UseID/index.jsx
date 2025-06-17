import { useId } from "react";

export const UseID = () => {
  const username = useId();
  const email = useId();

  const handleInput = (e) => {
    console.log(e.target.value);
    localStorage.setItem("username", JSON.stringify(username));
    localStorage.setItem("email", JSON.stringify(email));
  };
  return (
    <>
      <form>
        <div>
          <label htmlFor="username">UserName : </label>
          <input
            type="text"
            name="username"
            id={username}
            className="border border-red-400 mb-4"
            onChange={handleInput}
          />
        </div>

        <div>
          <label htmlFor="email">Email : </label>
          <input
            type="text"
            name="email"
            id={email}
            className="border border-red-400"
            onChange={handleInput}
          />
        </div>
        <button className="bg-red-400 p-2 text-white mt-12" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};
