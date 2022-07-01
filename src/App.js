import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import FloatingDiv from './Components/FloatingDiv/FloatingDiv';
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";




function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Intro />
      <FloatingDiv/>
      <Services />
      <Experience />
      <Works />
    </div>
  );
}

export default App;
