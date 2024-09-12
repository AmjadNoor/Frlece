import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "This platform made it so easy to find the right freelancer for my project. The process was smooth, and the results were outstanding!",
      author: "Sarah L.",
      role: "Business Owner",
    },
    {
      text: "As a freelancer, I've found some of the best clients here. It's a great place to showcase your skills and land exciting projects.",
      author: "David W.",
      role: "Freelance Developer",
    },
    {
      text: "I've hired several freelancers from this platform, and they never disappoint. The quality of work and professionalism is unmatched.",
      author: "Michael T.",
      role: "Startup Founder",
    },
    {
      text: "Being a part of this platform as a freelancer has been a game-changer for my career. I highly recommend it to anyone looking for meaningful projects.",
      author: "Lisa M.",
      role: "Freelance Designer",
    },
  ];

  return (
    <div className="px-4 py-12 bg-blue-500">
      <div className="text-2xl font-bold text-gray-800 mb-4 ">
        What Our Clients & Freelancers Say
      </div>
      <div className="grid grid-col -1 md:grid-cols-2 gap-6 ">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-blue-300 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            <p className="text-lg text-gray-700 italic mb-4">
              &quot;{testimonial.text}
            </p>
            <p className="font-bold text-gray-800">{testimonial.author}</p>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
