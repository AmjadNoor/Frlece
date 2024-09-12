import React from "react";
import Image from "next/image";

const FeaturedFreelancers = () => {
  const profiles = [
    {
      name: "Abhishek Kumar",
      role: "Full-Stack Developer",
      achievements: "React, Node.js Expert | Delivered 50+ Websites",
      photo: "https://i.postimg.cc/7hVw6Ms2/profile.png", // Random image
      city: "Bangalore",
      country: "India",
    },
    {
      name: "John Doe",
      role: "Graphic Designer",
      achievements: "100+ Projects Completed | 5-star Rating",
      photo: "https://randomuser.me/api/portraits/men/1.jpg", // Random image
      city: "New York",
      country: "USA",
    },
    {
      name: "Mark Davis",
      role: "Digital Marketer",
      achievements:
        "SEO & PPC Specialist | Helped Clients Increase Traffic by 150%",
      photo: "https://randomuser.me/api/portraits/men/2.jpg", // Random image
      city: "London",
      country: "UK",
    },
    {
      name: "Emily Johnson",
      role: "Content Writer",
      achievements: "500+ Articles Published | Expert in SEO Content",
      photo: "https://randomuser.me/api/portraits/women/2.jpg", // Random image
      city: "Toronto",
      country: "Canada",
    },
    {
      name: "Alice Williams",
      role: "Backend Developer",
      achievements: "Experienced in Python, Django | Built Scalable APIs",
      photo: "https://randomuser.me/api/portraits/women/3.jpg", // Random image
      city: "Sydney",
      country: "Australia",
    },
  ];

  return (
    <div className="px-4 py-12 bg-gray-50">
      <div className="text-2xl font-bold text-blue-800 mb-4 text-center">
        Our Top Freelancers Deliver Quality Every Time!
      </div>
      <div className="text-lg text-gray-600 mb-8 text-center">
        Browse through some of the most talented freelancers in design,
        development, marketing, writing, and more.
      </div>
      <div className="flex flex-nowrap gap-3 overflow-auto lg:overflow-hidden py-2 ">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="w-64 bg-blue-50 border border-blue-300 rounded-lg shadow-md p-4 flex-shrink-0 transform transition-transform duration-300 hover:scale-105"
          >
            <div className="flex justify-center mb-4">
              <Image
                src={profile.photo}
                alt={profile.name}
                width={100}
                height={100}
                className="w-24 h-24 object-cover rounded-full border-2 border-blue-200"
              />
            </div>
            <div className="text-center">
              <p className="text-xl font-semibold text-blue-800">
                {profile.name}
              </p>
              <p className="text-md text-gray-600">{profile.role}</p>
              <p className="text-gray-500 mt-2 font-semibold text-sm">
                {profile.achievements}
              </p>
              <p className="text-gray-500 mt-2 text-xs">
                {profile.city}, {profile.country}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedFreelancers;
