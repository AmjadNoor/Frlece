import React from "react";
import { whyChoosePlatfrom } from "@/data/whyChoosePlatform";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const Unique = () => {
  return (
    <div className="px-4 pb-12 bg-blue-800  shadow-lg ">
      <div className="text-2xl font-bold py-4">
        What Makes Our Platform Unique and Trustable
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {whyChoosePlatfrom.map((choose, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md">
            <div className="flex gap-1 items-center justify-start">
              <RiVerifiedBadgeFill className="text-blue-400 text-2xl mb-2" />
              <p className="text-xl font-bold mb-2">{choose.title}</p>
            </div>
            <p>{choose.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Unique;
