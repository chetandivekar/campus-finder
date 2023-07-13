import "./App.css";
import SelectCategory from "./components/Category/SelectCategory";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div style={{marginTop:"50px"}}>
        <Hero />
      </div>
    <SelectCategory/>
    </div>
  );
}

export default App;
