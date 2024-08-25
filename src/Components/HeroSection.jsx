import React from "react";
import heroimg from "../assets/heroimg.png";
import dots from "../assets/dots.svg";

export default function HeroSection() {
  return (
    <>
      <div className="relative flex flex-col-reverse lg:flex-row justify-between items-center p-8 gap-12 mx-10 md:mx-24 fontm">
        {/* Left Side: Hero Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl lg:text-5xl font-semibold">
            Revolutionize Your Health with AI Diagnostics
          </h1>
          <p className="mt-4 text-gray-600">
            At Diagno Plus, we provide cutting-edge AI tools for early detection
            of liver cirrhosis, brain tumors, and heart health. Access precise
            and timely health insights, available at your fingertips.
          </p>
          <a
            href="#"
            className="relative inline-flex items-center justify-center p-4 px-6 py-2 my-5 overflow-hidden font-medium text-indigo-600 transition duration-1000 ease-all border-2 border-green-500 rounded-md shadow-md hover:shadow-2xl hover:shadow-black group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-green-500 group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-green-500 transition-all duration-300 transform group-hover:translate-x-full ease">
              Try These Tools
            </span>
            <span className="relative invisible">Button Text</span>
          </a>
        </div>

        {/* Right Side: Hero Image */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img src={heroimg} alt="Healthcare" className="w-full max-w-xl" />
        </div>
      </div>

      {/* Decorative Dots */}
      <img
        src={dots}
        alt="Decorative Dots"
        className="absolute left-0 top-1/3 -ms-2 transform -translate-y-1/2 w-[5em]"
      />
      <img
        src={dots}
        alt="Decorative Dots"
        className="absolute right-0 bottom-10 -ms-2 transform -translate-y-1/2 w-[5em]"
      />
    </>
  );
}
