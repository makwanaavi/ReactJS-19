import { BrowserRouter, Routes, Route,  NavLink } from "react-router-dom"; // Fix imports
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Movie } from "./pages/Movie";
import ErrorPage from "./pages/NotFoundPage";

export const App = () => {
  const navLinkStyles = ({ isActive }) =>
    `px-4 py-2 text-lg font-medium transition-all duration-300 ${
      isActive ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-blue-500"
    }`;
  return (
    <BrowserRouter>
       <nav className="bg-white shadow-md px-6 py-4 flex gap-6 justify-center items-center">
      <NavLink to="/" className={navLinkStyles}>
        Home
      </NavLink>
      <NavLink to="/about" className={navLinkStyles}>
        About
      </NavLink>
      <NavLink to="/contact" className={navLinkStyles}>
        Contact
      </NavLink>
      <NavLink to="/movie" className={navLinkStyles}>
        Movie
      </NavLink>
    </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/movie" element={<Movie />} /> 
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
