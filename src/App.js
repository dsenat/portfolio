
import './App.css';
import NavBar from "./Components/NavBar/NavBar"
import LandingPage from "./Components/LandingPage/LandingPage"
import Portfolio from "./Components/Portfolio/Portfolio"
import About from "./Components/About/About"
import PriorExperience from "./Components/PriorExperience/PriorExperience"
import Contact from "./Components/Contact/Contact"


function App() {
  return (
    <div className="App">
      <h1>Portfolio</h1>
      <NavBar/>
      <div className="container">
        <LandingPage/>
        <About/>
        <Portfolio/>
        <PriorExperience/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
