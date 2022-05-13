import Home from "./components/Home";
import LeftNavbar from "./components/navigation/LeftNavbar";
import TopNavbar from "./components/navigation/TopNavbar";

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <div className="container">
        <LeftNavbar />
        <Home/>
      </div>
    </div>
  );
}

export default App;
