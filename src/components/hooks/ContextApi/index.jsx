import { createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const Name1="Avi"
    const Name2=" Makwana"
    const Age = 19

  return (
    <UserContext.Provider value={{Name1, Name2, Age}}>{children}</UserContext.Provider>
  );
};
