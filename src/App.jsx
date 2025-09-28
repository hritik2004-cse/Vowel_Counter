import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Gradient from './components/Gradient';
import HeroSec from './components/HeroSec';
import '@fontsource/roboto/400.css'; 
import '@fontsource/roboto/700.css'; 
import '@fontsource/montserrat/400.css';

function App() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#07080a] to-[#201f25]">
      <Nav />
      <HeroSec />
      {/* <Gradient/> */}
      <Footer />
    </div>
  )
}

export default App
