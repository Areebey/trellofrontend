import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Heading1 from './Components/Heading1';
import Heading2 from './Components/Heading2';
import Heading3 from './Components/Heading3';
import Heading4 from './Components/Heading4';
import MultipleItems from './Components/carousel1';
import Carousal from './Components/carousel2';
import Price from './Components/pricecard'
import UserSection from './Components/UserSection';
import Heading5 from './Components/Heading5';
import Footer from './Components/Footer'

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
    <Price/>    
    <UserSection />
    <Heading5 />
    <Footer />
    </div>
  );
}

export default App;
