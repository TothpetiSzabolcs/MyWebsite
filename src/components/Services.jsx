import ServiceCard from "./ServiceCard";
import { DiResponsive } from "react-icons/di";
import { RiCodeAiLine } from "react-icons/ri";
import { FaJsSquare } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Services = () => {
  const serviceCards = [
    {
      icon: <DiResponsive className=" h-30 w-30 text-blue-500 transform -translate-y-8"/>,
      title: "Responsive Design",
      description: "I create responsive designs that look great on all devices, from desktops to mobile phones."
    },
    {
      icon: <RiCodeAiLine className=" h-20 w-30 text-blue-500 transform -translate-y-0 mb-10"/>,
      title: "Clean Code",
      description: "I write clean, maintainable and scalable code using modern JavaScript best practices."
    },
    {
      icon: <FaJsSquare className="h-15 w-15 text-blue-500 transform -translate-y-4" />,
      title: "JavaScript",
      description: "With JavaScript, I handle DOM manipulation, async logic, and use functions and fetch calls to create seamless user interactions."
    },
    {
      icon: <DiNodejs className="h-30 w-30 text-blue-500 transform -translate-y-4" />,
      title: "Express",
      description: "I use Express and Node.js to create simple backends and connect web apps to databases and APIs."
    },
    {
      icon: <FaReact className="h-15 w-15 text-blue-500 transform -translate-y-4" />,
      title: "React",
      description: "I use React to create fast, reusable, and interactive user interfaces with modern state management and component-based architecture."
    },
    {
      icon: <SiMongodb className="h-15 w-15 text-blue-500 transform -translate-y-4" />,
      title: "MongoDB",
      description: "MongoDB helps me store data in a flexible format, making it easy to build and scale modern web apps."
    },
    {
      icon: <FaGithubSquare className="h-15 w-15 text-blue-500 transform -translate-y-4" />,
      title: "Git & GitHub",
      description: "I use Git for version control and GitHub to collaborate, manage code, and keep a clean project history."
    }
  ]

    useEffect(() => {
        AOS.init({duration: 700, once: true});
    }, []);

  return (
    <div className="bg-gray-950 w-full px-6 sm:px-10 md:px-12 lg:px-20 py-[10.3%]">
      <div className="pb-20">
  <h1
    className="text-3xl font-bold text-blue-500 mb-16 w-fit  mx-auto text-center lg:text-left lg:mx-0 xl:mx-0 2xl:mx-0 xl:text-left 2xl:text-left lg:pl-10"
    data-aos="fade-right"
    data-aos-duration="1000"
  >
    Services
  </h1>
      </div>

  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {serviceCards.map((card, index) => (
      <div key={index} className="h-full">
      <ServiceCard
        icon={card.icon}
        title={card.title}
        description={card.description}
      />
      </div>
    ))}
  </div>
</div>
  )
}

export default Services
