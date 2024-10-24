import React from 'react';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Working with Sarah was a game-changer for our brand. She brought fresh perspectives and innovative solutions.",
      author: "Jane Doe",
      role: "Marketing Director @ Cool Brand"
    },
    // Add more testimonials
  ];

  return (
    <section className="mb-20 bg-pink-50 text-black -rotate-1">
      <div className="rotate-1 p-12">
        <h2 className="text-4xl font-serif mb-12">
          nice things
          <span className="text-accent"> people say</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-lg mb-4 font-light">{testimonial.quote}</p>
              <div className="font-medium">{testimonial.author}</div>
              <div className="text-sm">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};