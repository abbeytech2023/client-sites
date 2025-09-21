import { Routes, Route } from "react-router-dom";
import Ucee from "./components/Ucee";
import G2global from "./components/G2global";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Ucee />} />
      <Route path="/g2" element={<G2global />} />
    </Routes>
  );
}
