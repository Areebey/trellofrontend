import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Heading1 from './Components/Heading1';
import Heading2 from './Components/Heading2';
import Heading3 from './Components/Heading3';
import Heading4 from './Components/Heading4';
import Carousal from './Components/carousel2';
//import ReactCardSlider from './Components/crousal/index';
import MultipleItems from './Components/carousel1/index';
import Card from './Components/pricecard';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Heading1 />
    <Heading2 />
    <MultipleItems/>
    <Heading3 />
    <Heading4 />
    <Carousal/>
    <Card/>
    
    </div>
  );
}

export default App;
