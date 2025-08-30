import "./App.css";
import { Home } from "./Pages";
import { Navbar } from "./Components";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
