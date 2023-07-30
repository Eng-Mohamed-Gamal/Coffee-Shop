import React from "react";

export default function Contact() {


    const handleSUB = (e) =>{
        e.preventDefault();
    }
    
  return (
    <div className="contact" id="Contact">
      <div className="container">
        <div className="grid">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.0360697132!2d-74.30932960709077!3d40.697539963305694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2seg!4v1690679624621!5m2!1sen!2seg"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="map" ></iframe>
            <form action="" onSubmit={handleSUB} >
                <h2>GET IN TOUCH</h2>
                 <div className="name">
                 <i class="fa-solid fa-user"></i>
                 <input type="text" placeholder="Your name" />
                 </div>
                 <div className="email">
                 <i class="fa-solid fa-envelope"></i>
                 <input type="email" placeholder="Your Email" />
                 </div>
                 <div className="number">
                 <i class="fa-solid fa-phone"></i>
                 <input type="number" placeholder="Your Number" />
                 </div>
                 <input type="submit" value={"Contact Now"} className="sub" />
            </form>
        </div>
      </div>
    </div>
  );
}
