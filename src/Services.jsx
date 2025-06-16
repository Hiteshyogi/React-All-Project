import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web apps tailored to your business needs using modern frameworks.",
      icon: "bi-code-slash"
    },
    {
      title: "UI/UX Design",
      description: "User-focused design to create intuitive and visually appealing digital experiences.",
      icon: "bi-palette"
    },
    {
      title: "Cloud Solutions",
      description: "Reliable and scalable cloud integration using AWS, Azure, or Google Cloud.",
      icon: "bi-cloud-upload"
    },
    {
      title: "SEO Optimization",
      description: "Boost your visibility and organic traffic with smart on-page and technical SEO.",
      icon: "bi-graph-up-arrow"
    }
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center mb-5">Our Services</h2>
        <div className="row">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-3 mb-4" key={index}>
              <div className="card h-100 text-center border-0 shadow-sm">
                <div className="card-body">
                  <i className={`bi ${service.icon} fs-1 text-primary mb-3`}></i>
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
