import ServiceCard from "./ServiceCard";
import { DiResponsive, DiNodejs } from "react-icons/di";
import { RiCodeAiLine } from "react-icons/ri";
import { FaJsSquare, FaReact, FaGithubSquare } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const Services = () => {
  const serviceCards = [
    {
      icon: <DiResponsive className="w-8 h-8" />,
      title: "Responsive Design",
      description:
        "I create responsive designs that look great on all devices, from desktops to mobile phones.",
    },
    {
      icon: <RiCodeAiLine className="w-8 h-8" />,
      title: "Clean Code",
      description:
        "I write clean, maintainable and scalable code using modern JavaScript best practices.",
    },
    {
      icon: <FaJsSquare className="w-8 h-8" />,
      title: "JavaScript",
      description:
        "With JavaScript, I handle DOM manipulation, async logic, and use functions and fetch calls to create seamless user interactions.",
    },
    {
      icon: <DiNodejs className="w-8 h-8" />,
      title: "Express",
      description:
        "I use Express and Node.js to create simple backends and connect web apps to databases and APIs.",
    },
    {
      icon: <FaReact className="w-8 h-8" />,
      title: "React",
      description:
        "I use React to create fast, reusable, and interactive user interfaces with modern state management and component-based architecture.",
    },
    {
      icon: <SiMongodb className="w-8 h-8" />,
      title: "MongoDB",
      description:
        "MongoDB helps me store data in a flexible format, making it easy to build and scale modern web apps.",
    },
    {
      icon: <FaGithubSquare className="w-8 h-8" />,
      title: "Git & GitHub",
      description:
        "I use Git for version control and GitHub to collaborate, manage code, and keep a clean project history.",
    },
  ];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: "var(--bg-secondary)" }}
    >
      {/* Background orb */}
      <div
        className="gradient-orb w-[600px] h-[600px] -top-60 right-[-200px]"
        style={{ background: "var(--accent-secondary)", animationDelay: "2s" }}
      />

      {/* Top divider line */}
      <div
        className="w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--border-subtle), transparent)",
        }}
      />

      <div className="relative z-10 container-main py-16 lg:py-20">
        {/* Section header */}
        <div className="mb-10">
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
            style={{ color: "var(--accent-primary)", fontFamily: "'Syne', sans-serif" }}
          >
            What I Do
          </p>
          <h2 className="section-title mb-4">Services</h2>
          <p
            className="max-w-md text-sm"
            style={{ color: "var(--text-muted)" }}
          >
            Technologies and skills I use to bring your ideas to life.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {serviceCards.map((card, index) => (
            <ServiceCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Bottom divider line */}
      <div
        className="w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--border-subtle), transparent)",
        }}
      />
    </section>
  );
};

export default Services;
