
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import './app.css';

function App() {
  return (
    <div className="App">
<Nav></Nav>
<Home></Home>
<h1 className='cen' > <span>ABOUT</span> US </h1>
<About></About>
<h1 className='cen-2' > <span>OUR</span> MENU </h1>
    </div>
  );
}

export default App;
