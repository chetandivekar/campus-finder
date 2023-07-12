import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Hero />

      <Navbar/>
      <div style={{marginTop:"50px"}}>
        <Hero />
      </div>
      <SelectCategory/>
    </div>
  );
}

export default App;
