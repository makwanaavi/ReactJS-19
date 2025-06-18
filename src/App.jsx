import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; // Fix imports
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Movie } from "./pages/Movie";

export const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> 
         <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>  
        <Link to="/movie">Movie</Link>

      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/movie" element={<Movie />} /> {/* Fix route path */}
      </Routes>
    </BrowserRouter>
  );
};
