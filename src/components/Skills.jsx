import { useEffect, useState, useRef } from "react";
import { TiHtml5 } from "react-icons/ti";
import { FaReact, FaGithubSquare, FaNode, FaLightbulb, FaPuzzlePiece } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { FaPeopleGroup } from "react-icons/fa6";

const techSkills = [
  {
    icon: <TiHtml5 className="w-7 h-7" />,
    name: "HTML5",
    level: 70,
    description:
      "Clean and semantic markup following best practices for SEO and accessibility.",
  },
  {
    icons: [
      <IoLogoCss3 className="w-6 h-6" />,
      <RiTailwindCssFill className="w-6 h-6" />,
    ],
    name: "CSS & Tailwind",
    level: 50,
    description:
      "Responsive interfaces with utility-first classes, Flexbox, Grid, and smooth animations.",
  },
  {
    icon: <IoLogoJavascript className="w-7 h-7" />,
    name: "JavaScript",
    level: 55,
    description:
      "Modern ES6+ features, event handling, DOM manipulation, and async/await patterns.",
  },
  {
    icon: <FaReact className="w-7 h-7" />,
    name: "React",
    level: 60,
    description:
      "Component-based UIs with hooks, React Router, context API, and rendering optimization.",
  },
  {
    icon: <FaNode className="w-7 h-7" />,
    name: "Node & Express",
    level: 70,
    description:
      "RESTful APIs, middleware, server-side logic, and database integration.",
  },
  {
    icon: <SiMongodb className="w-7 h-7" />,
    name: "MongoDB",
    level: 75,
    description:
      "Schema design, queries, and Mongoose integration for scalable backend systems.",
  },
  {
    icon: <FaGithubSquare className="w-7 h-7" />,
    name: "Git & GitHub",
    level: 60,
    description:
      "Version control, branching, pull requests, and clean commit history.",
  },
];

const softSkills = [
  {
    icon: <FaPeopleGroup className="w-7 h-7" />,
    name: "Teamwork",
    description:
      "I enjoy working in teams, sharing knowledge, and solving problems collaboratively.",
  },
  {
    icon: <FaLightbulb className="w-7 h-7" />,
    name: "Continuous Learning",
    description:
      "Always eager to learn new technologies and improve my skills with modern tools.",
  },
  {
    icon: <FaPuzzlePiece className="w-7 h-7" />,
    name: "Problem Solving",
    description:
      "Breaking down complex problems into simple, manageable, and maintainable solutions.",
  },
];

// Circular progress ring component
const ProgressRing = ({ level, isVisible }) => {
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (isVisible ? level / 100 : 0) * circumference;

  return (
    <div className="relative w-[72px] h-[72px] flex-shrink-0">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
        {/* Background ring */}
        <circle
          cx="32"
          cy="32"
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="4"
        />
        {/* Progress ring */}
        <circle
          cx="32"
          cy="32"
          r={radius}
          fill="none"
          stroke="url(#ringGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 1.2s cubic-bezier(0.16, 1, 0.3, 1)" }}
        />
        <defs>
          <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-primary)" />
            <stop offset="100%" stopColor="var(--accent-secondary)" />
          </linearGradient>
        </defs>
      </svg>
      {/* Percentage text */}
      <span
        className="absolute inset-0 flex items-center justify-center text-xs font-bold"
        style={{
          fontFamily: "'Syne', sans-serif",
          color: "var(--accent-primary)",
        }}
      >
        {isVisible ? level : 0}%
      </span>
    </div>
  );
};

const Skills = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Background orbs */}
      <div
        className="gradient-orb w-[500px] h-[500px] top-0 left-[-200px]"
        style={{ background: "var(--accent-primary)" }}
      />
      <div
        className="gradient-orb w-[400px] h-[400px] bottom-0 right-[-150px]"
        style={{ background: "var(--accent-secondary)", animationDelay: "3s" }}
      />

      {/* Top divider */}
      <div
        className="w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--border-subtle), transparent)",
        }}
      />

      <div className="relative z-10 container-main py-16 lg:py-20">
        {/* Section header */}
        <div className="mb-12">
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
            style={{
              color: "var(--accent-primary)",
              fontFamily: "'Syne', sans-serif",
            }}
          >
            Skills & Experience
          </p>
          <h2 className="section-title mb-4">My Toolkit</h2>
          <p
            className="max-w-md text-sm"
            style={{ color: "var(--text-muted)" }}
          >
            Technologies I work with and the qualities I bring to every project.
          </p>
        </div>

        {/* Tech Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {techSkills.map((skill, i) => (
            <div
              key={i}
              className="group glass-card flex items-start gap-5 p-5"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1)`,
                transitionDelay: `${i * 80}ms`,
              }}
            >
              {/* Progress ring */}
              <ProgressRing level={skill.level} isVisible={visible} />

              {/* Content */}
              <div className="flex-1 min-w-0">
                {/* Name + icon row */}
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="flex items-center gap-1.5 transition-colors duration-300"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {skill.icons
                      ? skill.icons.map((icon, j) => (
                          <span
                            key={j}
                            className="group-hover:text-[var(--accent-primary)] transition-colors duration-300"
                          >
                            {icon}
                          </span>
                        ))
                      : (
                          <span className="group-hover:text-[var(--accent-primary)] transition-colors duration-300">
                            {skill.icon}
                          </span>
                        )}
                  </div>
                  <h3
                    className="text-sm font-bold group-hover:text-[var(--text-primary)] transition-colors duration-300"
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {skill.name}
                  </h3>
                </div>

                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills label */}
        <div className="mb-8">
          <div className="flex items-center gap-4">
            <h3
              className="text-lg font-bold whitespace-nowrap"
              style={{
                fontFamily: "'Syne', sans-serif",
                color: "var(--text-primary)",
              }}
            >
              Soft Skills
            </h3>
            <div
              className="flex-1 h-px"
              style={{
                background:
                  "linear-gradient(90deg, var(--border-subtle), transparent)",
              }}
            />
          </div>
        </div>

        {/* Soft Skills cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {softSkills.map((skill, i) => (
            <div
              key={i}
              className="group glass-card p-6 text-center"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1)`,
                transitionDelay: `${600 + i * 100}ms`,
              }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 mx-auto flex items-center justify-center rounded-xl mb-4 transition-all duration-300"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  color: "var(--text-muted)",
                }}
              >
                <span className="group-hover:text-[var(--accent-primary)] transition-colors duration-300">
                  {skill.icon}
                </span>
              </div>

              <h4
                className="text-sm font-bold mb-2 group-hover:text-[var(--text-primary)] transition-colors duration-300"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  color: "var(--text-secondary)",
                }}
              >
                {skill.name}
              </h4>

              <p
                className="text-xs leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
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

export default Skills;
