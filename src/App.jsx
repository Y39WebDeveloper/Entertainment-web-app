import "./App.css";
import { Home } from "./Pages";
import { Navbar } from "./Components";
import { DataProvider } from "./Contexts/DataContext";

function App() {
  return (
    <DataProvider>
      <div className="app">
        <Navbar />
        <Home />
      </div>
    </DataProvider>
  );
}

export default App;
