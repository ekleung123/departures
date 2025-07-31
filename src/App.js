import { BrowserRouter, Route, Routes } from "react-router-dom";

import Admin from "./pages/Admin"; 
import Public from "./pages/Public";
import Gate from "./pages/Gate";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>      
          <Route exact path="/" element={<Admin />} />
          <Route exact path="/public" element={<Public />} />
          <Route exact path="/gate" element={<Gate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};