
import { Routes, Route } from "react-router";
import Home from "./screens/mui/home/Home";
import Comp2 from "./screens/mui/comp2/Comp2";
import './App.css';
import ResponsiveAppBar from "./components/mui/navbar/ResponsiveAppBar";

function App() {
  return (
    <div className="App">
    <ResponsiveAppBar />
     <Routes>
        <Route path="/" element={<Home />} />; 
        <Route path="/comp2" element={<Comp2 />} />; 
     </Routes>
    </div>
  );
}

export default App;

