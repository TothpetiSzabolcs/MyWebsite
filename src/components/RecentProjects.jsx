import { useState, useEffect } from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

import { TbSquareDot, TbSquareDotFilled } from "react-icons/tb";
import {
  BsFillArrowLeftSquareFill,
  BsArrowRightSquareFill,
} from "react-icons/bs";

import AOS from "aos";
import "aos/dist/aos.css";

const images = [img1, img2, img3, img4];

const RecentProjects = () => {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const prev = () =>
    setSelected((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const next = () =>
    setSelected((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <section className="bg-gray-900 w-full py-20">
      <div className="flex flex-col items-center justify-center w-full px-4 md:px-10 relative">
        {/* Cím */}
        <h1
          className="text-3xl font-bold text-blue-500 w-full text-center lg:text-left lg:pl-20 mb-12"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          Recent Projects
        </h1>

        <div className="relative w-full flex items-center justify-center h-auto">
          <button
            onClick={prev}
            className="absolute left-2 md:left-6 lg:left-20 z-10"
          >
            <BsFillArrowLeftSquareFill className="text-blue-500 w-8 h-8 md:w-10 md:h-10 hover:scale-125 transition-all duration-300 cursor-pointer" />
          </button>

          <div
            className="flex items-center justify-center gap-4 md:gap-6 w-full max-w-6xl"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src={images[(selected - 1 + images.length) % images.length]}
              alt="prev"
              className="hidden md:block w-32 h-48 lg:w-40 lg:h-60 object-cover rounded-lg border-2 border-gray-700 opacity-60 transition-all duration-300"
            />

            <img
              src={images[selected]}
              alt="active"
              className="w-52 h-72 md:w-60 md:h-80 object-cover rounded-lg border-4 border-blue-500 shadow-xl z-10 transition-all duration-300"
            />
            <img
              src={images[(selected + 1) % images.length]}
              alt="next"
              className="hidden md:block w-32 h-48 lg:w-40 lg:h-60 object-cover rounded-lg border-2 border-gray-700 opacity-60 transition-all duration-300"
            />
          </div>

          <button
            onClick={next}
            className="absolute right-2 md:right-6 lg:right-20 z-10"
          >
            <BsArrowRightSquareFill className="text-blue-500 w-8 h-8 md:w-10 md:h-10 hover:scale-125 transition-all duration-300 cursor-pointer" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 mt-10">
        {images.map((_, i) =>
          i === selected ? (
            <TbSquareDotFilled
              key={i}
              className="text-blue-500 w-5 h-5 cursor-pointer transition-all duration-300 scale-150"
              onClick={() => setSelected(i)}
            />
          ) : (
            <TbSquareDot
              key={i}
              className="text-gray-500 w-5 h-5 cursor-pointer transition-all duration-300"
              onClick={() => setSelected(i)}
            />
          )
        )}
      </div>
    </section>
  );
};

export default RecentProjects;
