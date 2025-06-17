import { BrowserRouter, Route, Routes } from "react-router-dom";
import Students from "./pages/Students";
import Add from "./pages/Add";
import Update from "./pages/Update";
import './style.css';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Students />} />
        <Route path="/add" element={<Add />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
} 

export default App;
