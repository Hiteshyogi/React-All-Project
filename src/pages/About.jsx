import React from 'react';

const About = () => {
  return (
   <>
  
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center">
          
          <div className="col-md-6 mb-4 mb-md-0">
            <img 
              src="https://sheshindia.com/content_big/Contact-us-page_Blog-banner.jpg" 
              alt="About Us" 
              className="img-fluid rounded shadow"
            />
          </div>
          
          <div className="col-md-6">
            <h2>About Us</h2>
            <p className="lead">
              Welcome to MyApp — your reliable partner in building modern digital solutions.
            </p>
            <p>
              We are a passionate team dedicated to delivering high-quality products that solve real problems. Our services range from web development to UI/UX design and cloud integration.
            </p>
            <p>
              With years of experience and a user-focused approach, we help businesses grow and innovate. Let’s build something amazing together.
            </p>
            <a href="/contact" className="btn btn-primary mt-3">Contact Us</a>
          </div>

        </div>
      </div>
    </section>
    
   </>
  );
};

export default About;
