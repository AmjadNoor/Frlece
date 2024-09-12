import Link from "next/link";
import React from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Hero = () => {
  return (
    <div className="flex items-center justify-center flex-col bg-gradient-to-r from-blue-500 to-purple-600   shadow-lg w-screen md:w-[100%] h-screen md:h-[100%] md:py-10 ">
      <div className="flex items-center justify-center flex-col text-white">
        <h1 className="text-3xl md:text-6xl text-center mb-6 font-semibold">
          Empower Your Business with Top Freelancers Across All Industries
        </h1>
        <div className="text-2xl font-semibold md:text-5xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white px-4 p-2 rounded-md">
          Hire the Best Talent for Your Projects
        </div>
        <div
          className={cn(
            "text-sm md:text-base mt-4 max-w-xs md:max-w-2xl text-center mx-auto text-neutral-200",
            textFont.className
          )}
        >
          Our platform connects you with top freelancers from various fields.
          Whether you need web development, design, writing, or marketing
          services, we have the right talent to meet your needs. Start hiring
          today or list your skills.
        </div>
        <div className="flex gap-4 sm:gap-10 md:gap-20 items-center justify-center">
          <button className="mt-6 py-3 px-4 rounded-full text-md font-normal bg-indigo-800/80 text-white hover:bg-indigo-400">
            <Link href="/sign-up">Join as Freelancer</Link>
          </button>
          <button className="mt-6 py-3 px-4 text-md font-normal bg-indigo-800/80 text-white hover:bg-indigo-400 rounded-full">
            <Link href="/hire-talent">Hire Top Talent</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
