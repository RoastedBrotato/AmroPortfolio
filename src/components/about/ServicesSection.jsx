import React from 'react';
import { Lightbulb, Pen, Award, Heart } from 'lucide-react';

export const ServicesSection = () => {
  const services = [
    { icon: <Lightbulb className="w-8 h-8" />, title: "big ideas", description: "campaigns + launches that make waves" },
    { icon: <Pen className="w-8 h-8" />, title: "word magic", description: "content + voice that connects" },
    { icon: <Award className="w-8 h-8" />, title: "visual vibes", description: "designs that tell your story" },
    { icon: <Heart className="w-8 h-8" />, title: "team spirit", description: "collaboration that clicks" }
  ];

  return (
    <section className="mb-20">
      <h2 className="text-4xl font-serif mb-12">
        what i can do for
        <span className="text-accent"> you</span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="p-6 background-light rounded-lg hover:bg-gray-50 hover:text-black transition-colors border-2 border-dashed border-gray-200">
            <div className="text-accent mb-4">{service.icon}</div>
            <h3 className="text-xl mb-2 font-medium lowercase">{service.title}</h3>
            <p className="font-light">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};