import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4 pb-2 mt-auto">
      <div className="container text-center text-md-start">
        <div className="row">
          
          <div className="col-md-4 mb-3">
            <h5>MyApp</h5>
            <p>Your trusted app for everything you need. Built with care and passion.</p>
          </div>
          
          <div className="col-md-2 mb-3">
            <h6>Links</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-light text-decoration-none">About</a></li>
              <li><a href="/services" className="text-light text-decoration-none">Services</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

          <div className="col-md-3 mb-3">
            <h6>Contact</h6>
            <p>Email: info@myapp.com</p>
            <p>Phone: +1 (234) 567-8901</p>
          </div>

          <div className="col-md-3 mb-3">
            <h6>Follow Us</h6>
            <a href="#" className="text-light me-3"><i className="bi bi-facebook"></i></a>
            <a href="#" className="text-light me-3"><i className="bi bi-twitter"></i></a>
            <a href="#" className="text-light"><i className="bi bi-instagram"></i></a>
          </div>

        </div>

        <hr className="border-light" />
        <p className="text-center mb-0">&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
