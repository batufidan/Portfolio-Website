import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import FloatingDiv from './Components/FloatingDiv/FloatingDiv';



function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Intro />
      <FloatingDiv/>
    </div>
  );
}

export default App;
