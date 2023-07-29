import React from 'react'

export default function Nav() {
  return (
<div className="nav">
<div className="container">
<div className="flex">
        <div className="logo">
            <img src="IMAGES/logo.jpg" alt="" />
        </div>
        <div className="links">
            <ul>
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Menu">Menu</a></li>
                <li><a href="#Products">Products</a></li>
                <li><a href="#Review">Review</a></li>
                <li><a href="#Contact">Contact</a></li>
                <li><a href="#Blogs">Blogs</a></li>
            </ul>
        </div>
        <div className="icons">
        <i class="fa-solid fa-magnifying-glass"></i>
            <div className="search">
                <input type="text" />
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="shopping">
            <i class="fa-solid fa-cart-shopping"></i>
            </div>
        </div>
    </div>
</div>
</div>
  )
}
