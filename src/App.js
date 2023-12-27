import './App.css';
import NavBar from './Component/NavBar';
import Home from './Component/Home';
import SocialLinks from './Component/SocialLinks';
import About from './Component/About';
import Experience from './Component/Experience';
import Contact from './Component/Contact';

function App() {
  return (
    <div className="flex flex-col">
      <NavBar/>
      <Home/>
      <SocialLinks/>
      <About/>
      <Experience/>
      <Contact/>
    </div>
  );
}

export default App;
