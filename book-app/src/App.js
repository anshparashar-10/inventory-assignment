import "./App.css";
import AddBook from "./Component/AddBook";
import NavBar from "./Component/NavBar";
// import EditUser from "./Component/EditUser";
// import NotFound from "./Component/NotFound";
import Home from "./Component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditBook from "./Component/EditBook";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/edit/:id" element={<EditBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
