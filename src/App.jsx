// import { UserProvider } from "./components/hooks/ContextApi";
// import { About } from "./components/hooks/ContextApi/About";
// import { Home } from "./components/hooks/ContextApi/Home";

// import {
//   ThemeProvider,
//   DarkLightMode,
// } from "./components/hooks/ContextApi/DarkLightMode";

import { Usereducre } from "./components/hooks/useReducer";

export const App = () => {
  return (
    <>
      {/* <UserProvider>
        <Home />
        <br />
        <useBioContext/>
        <About />
      </UserProvider> */}
      {/* <ThemeProvider>
        <DarkLightMode />
      </ThemeProvider> */}

      <Usereducre/>
    </>
  );
};
