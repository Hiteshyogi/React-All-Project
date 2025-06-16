import React from 'react';

const CardSection = () => {
  const cards = [
    {
      title: "Fast Performance",
      text: "Experience blazing fast load times and performance with our optimized solution.",
      img: "https://picsum.photos/200/150?random=1",
    },
    {
      title: "Responsive Design",
      text: "Looks great on all screen sizes — desktop, tablet, and mobile.",
      img: "https://picsum.photos/200/150?random=2",
    },
    {
      title: "Secure & Reliable",
      text: "Built with security in mind to keep your data safe and protected.",
      img: "https://picsum.photos/200/150?random=3",
    }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Our Features</h2>
        <div className="row">
          {cards.map((card, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm">
                <img src={card.img} className="card-img-top" alt={card.title} />
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;
