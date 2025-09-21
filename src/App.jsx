import { Routes, Route } from "react-router-dom";
import Ucee from "./components/Ucee";
import G2global from "./components/G2global";
import EzeNwanneAutos from "./components/CarDealer";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Ucee />} />
      <Route path="/eze" element={<EzeNwanneAutos />} />
      <Route path="/g2" element={<G2global />} />
    </Routes>
  );
}
