import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Heading1 from './Components/Heading1';
import Heading2 from './Components/Heading2';
import Heading3 from './Components/Heading3';
import Heading4 from './Components/Heading4';
import MultipleItems from './Components/carousel1';
import Carousal from './Components/carousel2';

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
    </div>
  );
}

export default App;
