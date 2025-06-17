import { UserProvider } from "./components/hooks/ContextApi";
import { About } from "./components/hooks/ContextApi/About";
import { Home } from "./components/hooks/ContextApi/Home";

export const App = () => {
  return (
    <>
      <UserProvider>
        <Home />
        <br />
        <About />
        <useBioContext/>
      </UserProvider>
      
    </>
  );
};
