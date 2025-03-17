import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";
import LayoutDefault from "./layout/LayoutDefault";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutDefault> </LayoutDefault>}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="*" element={<Error404></Error404>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
