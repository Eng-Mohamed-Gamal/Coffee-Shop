
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';
import Nav from './Components/Nav/Nav';
import Products from './Components/Products/Products';
import './app.css';

function App() {
  return (
    <div className="App">
<Nav></Nav>
<Home></Home>
<h1 className='cen' > <span>ABOUT</span> US </h1>
<About></About>
<h1 className='cen-2' > <span>OUR</span> MENU </h1>
<Menu></Menu>
<h1 className='cen' > <span>LATEST</span> PRODUCTS </h1>
<Products></Products>
    </div>
  );
}

export default App;
