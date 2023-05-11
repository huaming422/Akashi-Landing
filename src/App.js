import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Component/Navbar";
import { Dashboard } from "./Component/Dashboard";
import { Landing } from "./Component/Landing";
import { ThemeProvider } from "./ThemeContext";
import { First } from "./Component/First";
function App() {
  return (
    <ThemeProvider>
      <div className="App">
        {/* <Navbar/>
        <Dashboard/> */}
        <First />
        <Landing />
      </div>
    </ThemeProvider>
  );
}

export default App;
