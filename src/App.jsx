import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Technologies from "./components/Technologies";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Project />
    </div>
  );
};

export default App;
