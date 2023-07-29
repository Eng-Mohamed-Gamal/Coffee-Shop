import React, { useRef, useState } from 'react'

export default function Nav() {
    
    const barsRef = useRef()
    const searchRef = useRef()
const Bars = () =>{
    barsRef.current.classList.toggle("active")
    searchRef.current.classList.remove("scale")
}
const Search = () =>{
    searchRef.current.classList.toggle("scale")
    barsRef.current.classList.remove("active")
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
            <i class="fa-solid fa-cart-shopping"></i>
            {/* <div className="carts">
                <div className="box">
                    <img src="IMAGES/cart-1.jpg" alt="" />
                </div>
            </div> */}
            </div>
        </div>
    </div>
</div>
</div>
  )

}
