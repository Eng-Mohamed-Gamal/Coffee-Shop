
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';
import Nav from './Components/Nav/Nav';
import Products from './Components/Products/Products';
import Review from './Components/Review/Review';
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
<h1 className='cen-2' > <span>CUSTOMER’S</span> REVIEW </h1>
<Review></Review>
<h1 className='cen' > <span>CONTACT</span> US </h1>
<Contact></Contact>
<h1 className='cen-2' > <span>OUR</span> BLOGS </h1>
<Blog></Blog>
<Footer></Footer>
    </div>
  );
}

export default App;
