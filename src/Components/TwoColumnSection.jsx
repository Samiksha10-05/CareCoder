import React from 'react';

const TwoColumnSection = ({ imageSrc, heading, description, buttonText, buttonLink, imageOnLeft = true }) => {
  return (
    <div className="py-16 bg-white">
      <div className={`max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 px-6 lg:px-12 ${imageOnLeft ? '' : 'lg:flex-row-reverse'}`}>
        {/* Left/Right side: Image */}
        <div className="w-full lg:w-1/2">
          <img src={imageSrc} alt="Section Image" className="w-full h-auto" />
        </div>

        {/* Left/Right side: Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-4">{heading}</h2>
          <div className="w-16 h-[2px] bg-gray-400 mb-4 mx-auto lg:mx-0"></div>
          <p className="text-gray-600 mb-6">
            {description}
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
              {buttonText}
            </span>
            <span className="relative invisible">Button Text</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TwoColumnSection;
