import { useState } from "react";

export const ShortCirCuit = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState("Avi");
  return (
    <section className="bg-slate-200 h-screen">
      <h1 className="text-center m-4 text-2xl">
        WellCome To ShortCirCuit Code !
      </h1>

      {isLogin && <p className="ml-10 m-12 text-xl">You are Log in !</p>}

      {user ? (
        <p className="ml-10 m-12 text-xl"> {` Hello ${user}`}</p>
      ) : (
        <p className="ml-10 m-12 text-xl"> You are Log in !</p>
      )}

      <div className="grid-cols-3 m-10 rounded-lg flex justify-between">
        <button
          className="bg-black text-white p-2"
          onClick={() => {
            setIsLogin(!isLogin);
          }}
        >
          Toggle Login State
        </button>

        <button
          className="bg-black text-white p-2"
          onClick={() => setUser(!user)}
        >
          Set User
        </button>
        <button className="bg-black text-white p-2">Clear User</button>
      </div>
    </section>
  );
};
