import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Heading1 from './Components/Heading1';
import Heading2 from './Components/Heading2';
import Heading3 from './Components/Heading3';
import Heading4 from './Components/Heading4';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Heading1 />
    <Heading2 />
    <MultipleItems/>
    <Heading3 />
    <Heading4 />
    </div>
  );
}

export default App;
