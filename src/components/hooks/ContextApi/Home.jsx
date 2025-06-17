import { useContext } from "react";
import { UserContext } from ".";

export const Home = () => {
  const {Name1, Name2} = useContext(UserContext);

  return <div className="w-full h-screen bg-pink-300">Home {Name1} {Name2}</div>;
};
