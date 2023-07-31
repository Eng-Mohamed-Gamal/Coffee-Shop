import React, { useRef } from 'react'

export default function Nav() {
    
    const barsRef = useRef()
    const searchRef = useRef()
    const cartsRef = useRef()
const Bars = () =>{
    barsRef.current.classList.toggle("translate")
    if(barsRef.current.classList.contains("translate")){
        barsRef.current.classList.add("trans")
    }else{
        setTimeout(()=>{
            barsRef.current.classList.remove("trans")
        },400)
    }
    searchRef.current.classList.remove("scale")
    cartsRef.current.classList.remove("translate")
}
const Search = () =>{
    searchRef.current.classList.toggle("scale")
    barsRef.current.classList.remove("translate")
    cartsRef.current.classList.remove("translate")
}
const Catrs = () =>{
cartsRef.current.classList.toggle("translate")
barsRef.current.classList.remove("translate")
searchRef.current.classList.remove("scale")
}

  return (
<div className="nav"   >
<div className="container">
<div className="flex">
        <div className="logo">
            <img src="IMAGES/logo.jpg" alt=""  className='go' />
        </div>

            <ul className='normal' ref={barsRef} >
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Menu">Menu</a></li>
                <li><a href="#Products">Products</a></li>
                <li><a href="#Review">Review</a></li>
                <li><a href="#Contact">Contact</a></li>
                <li><a href="#Blogs">Blogs</a></li>
            </ul>

    
        <div className="icons" >
        <i class="fa-solid fa-bars wait "   onClick={Bars}  ></i>
        <i class="fa-solid fa-magnifying-glass"  onClick={Search}   ></i>
            <div className="search" ref={searchRef}  >
                <input type="text" placeholder='Search a Product'  />
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="shopping">
            <i class="fa-solid fa-cart-shopping"  onClick={Catrs} ></i>
       
            </div>
        </div>
        <div className="carts"  ref={cartsRef} >
                <div className="box">
                    <img src="IMAGES/cart-1.png" alt="" />
                    <div className="con">
                        <h3>Cart item 01</h3>
                        <p>$15.99</p>
                    </div>
                    <i class="fa-solid fa-xmark"></i>
                </div>
                <div className="box">
                    <img src="IMAGES/cart-2.png" alt="" />
                    <div className="con">
                        <h3>Cart item 02</h3>
                        <p>$15.99</p>
                    </div>
                    <i class="fa-solid fa-xmark"></i>
                </div>
                <div className="box">
                    <img src="IMAGES/cart-3.png" alt="" />
                    <div className="con">
                        <h3>Cart item 03</h3>
                        <p>$15.99</p>
                    </div>
                    <i class="fa-solid fa-xmark"></i>
                </div>
                <div className="box">
                    <img src="IMAGES/cart-4.png" alt="" />
                    <div className="con">
                        <h3>Cart item 04</h3>
                        <p>$15.99</p>
                    </div>
                    <i class="fa-solid fa-xmark"></i>
                </div>
                <button>checkout now</button>
            </div>

    </div>
</div>
</div>
  )

}
