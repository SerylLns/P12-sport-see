import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import LeftNavbar from "./components/navigation/LeftNavbar";
import TopNavbar from "./components/navigation/TopNavbar";
import SelectUser from "./components/SelectUser";

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <div className="container">
        <LeftNavbar />
        <Routes>
          <Route path="/" element={<SelectUser />} />
          <Route path="/:id" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
