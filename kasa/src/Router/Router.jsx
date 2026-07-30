import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Logement from "../Pages/Logement/Logement";
import Error from "../Pages/Error/Error";
import About from "../Pages/About/About";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/logement/:id" element={<Logement />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
