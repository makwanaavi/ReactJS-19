// import { use } from "react";
// import { createContext, useState } from "react";

// // eslint-disable-next-line react-refresh/only-export-components
// export const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState("dark");

//   const handleToggleTheme = () => {
//     return setTheme((prevtheme) => (prevtheme === "dark" ? "light" : "dark"));
//   };
//   return (
//     <ThemeContext.Provider value={{theme, handleToggleTheme}}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const DarkLightMode = () => {
//   const { theme, handleToggleTheme } = use(ThemeContext);
//   return (
//     <div className={`flex justify-center items-center h-screen flex-col p-4 ${theme ==="dark"? "bg-black text-white" : "bg-white text-black"}`}>
//       <h1>DarkLightMode</h1>
//       <p>Hello React js 19 </p>
//       <button onClick={handleToggleTheme}>
//         {theme === "dark" ? "Switch To Light Mode" : "Switch To Dark Mode"}
//       </button>
//     </div>
//   );
// };





