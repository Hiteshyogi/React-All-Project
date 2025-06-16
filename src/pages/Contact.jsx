import React from 'react';

const Contact = () => {
  return (
   <>
   
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Get in Touch</h2>
        
        <div className="row">
          
          {/* Contact Info */}
          <div className="col-md-5 mb-4">
            <h5>Contact Information</h5>
            <p><strong>Address:</strong> 123 Main Street, City, Country</p>
            <p><strong>Email:</strong> contact@myapp.com</p>
            <p><strong>Phone:</strong> +1 (234) 567-8901</p>
            <p><strong>Hours:</strong> Mon - Fri, 9:00 AM - 6:00 PM</p>
          </div>

          {/* Contact Form */}
          <div className="col-md-7">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input type="text" className="form-control" id="subject" placeholder="Subject" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="5" placeholder="Type your message..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>

        </div>
      </div>
    </section>
    
   </>
  );
};

export default Contact;
