import { Routes, Route } from "react-router-dom";
import Ucee from "./components/Ucee";
import G2global from "./components/G2global";
import EzeNwanneAutos from "./components/CarDealer";
import LaundryLanding from "./components/Laundry";
import LazelleCarWash from "./components/LazelleCarWash";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Ucee />} />
      <Route path="/eze" element={<EzeNwanneAutos />} />
      <Route path="/wash" element={<LaundryLanding />} />
      <Route path="/g2" element={<G2global />} />
      <Route path="/lazelle" element={<LazelleCarWash />} />
    </Routes>
  );
}

// https://images.unsplash.com/photo-1597156776667-501b49b1f3d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FycyUyMHdhc2glMjBuaWdlcmlhfGVufDB8fDB8fHww
//https://plus.unsplash.com/premium_photo-1675881512867-ddd71d031c15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJhciUyMGFuZCUyMGxvdW5nZSUyMGluJTIwbmlnZXJpYXxlbnwwfHwwfHx8MA%3D%3D
