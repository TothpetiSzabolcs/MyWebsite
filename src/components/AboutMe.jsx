import { useEffect, useState } from "react";
import Profile from "../assets/profilePicture.webp";

const timelineItems = [
  {
    emoji: "🪵",
    title: "Early Life & First Career",
    text: "My name is Szabolcs Tóthpeti, and I was born on August 19, 1995 in Nagykanizsa, Hungary. I have a strong foundation in the English language, having studied it for twelve years. My first profession was as a carpenter, but at the age of eighteen, I moved to the United Kingdom and spent about a year working in London. After returning to Hungary, I completed my high school diploma and then relocated to Austria for work. I spent six years in Austria before deciding to pursue a career in programming. During this transformative period of my life, I also got married and became a father.",
  },
  {
    emoji: "💻",
    title: "The Coding Journey",
    text: "My journey into programming began at CodeCool, where I graduated in July 2025. Throughout my studies, I gained hands-on experience with a wide range of technologies and tools, including HTML, CSS, JavaScript, React, Express, Node.js, MongoDB, Tailwind CSS, API development, backend server management, the use of external libraries, as well as the application and integration of AI tools. Today, I am passionate about building modern, responsive web applications and constantly expanding my skill set.",
  },
  {
    emoji: "🚀",
    title: "Looking Forward",
    text: "As I continue my journey as a developer, my main goal is to constantly learn and grow in the ever-evolving world of technology. I am excited by the endless possibilities that web development offers — from building intuitive user experiences and robust backend systems, to exploring the frontiers of artificial intelligence and cloud computing. I aspire to contribute to meaningful, innovative projects that make a real difference in people's lives.",
  },
];

const AboutMe = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Background orbs */}
      <div
        className="gradient-orb w-[500px] h-[500px] top-20 right-[-200px]"
        style={{ background: "var(--accent-primary)" }}
      />
      <div
        className="gradient-orb w-[400px] h-[400px] bottom-40 left-[-150px]"
        style={{ background: "var(--accent-secondary)", animationDelay: "4s" }}
      />

      <div className="relative z-10 container-main py-16 lg:py-20">
        {/* Section header */}
        <div className="mb-12 text-center lg:text-left">
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
            style={{
              color: "var(--accent-primary)",
              fontFamily: "'Syne', sans-serif",
            }}
          >
            About
          </p>
          <h2 className="section-title">Who Am I?</h2>
        </div>

        {/* Top row — Image + intro */}
        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-14 mb-14">
          {/* Profile image — Hexagon */}
          <div
            className="relative flex-shrink-0 transition-all duration-1000"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
            }}
          >
            {/* Glow */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(0, 212, 255, 0.25), transparent 60%)",
                filter: "blur(50px)",
                transform: "scale(1.4)",
              }}
            />

            {/* Hexagon frame + Image */}
            <div className="relative w-52 h-60 sm:w-56 sm:h-64 md:w-60 md:h-68 lg:w-64 lg:h-72">
              {/* Hexagon border (outer) */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  background: "linear-gradient(135deg, rgba(0, 212, 255, 0.4), rgba(123, 97, 255, 0.3))",
                }}
              />

              {/* Hexagon inner fill */}
              <div
                className="absolute inset-[2px]"
                style={{
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  background: "linear-gradient(180deg, rgba(0, 212, 255, 0.06), rgba(10, 10, 15, 0.9))",
                }}
              />

              {/* Rotating glow ring */}
              <div
                className="absolute -inset-3 animate-[spin_12s_linear_infinite] opacity-30"
                style={{
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  background: "conic-gradient(from 0deg, transparent, var(--accent-primary), transparent, var(--accent-secondary), transparent)",
                }}
              />

              {/* Image */}
              <img
                src={Profile}
                alt="Szabolcs Tóthpeti"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[110%] max-w-none object-contain pointer-events-none z-10 drop-shadow-[0_0_30px_rgba(0,212,255,0.2)]"
              />
            </div>
          </div>

          {/* Intro text */}
          <div
            className="flex flex-col items-center md:items-start text-center md:text-left flex-1 min-w-0 transition-all duration-1000 delay-200"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
            }}
          >
            <h3
              className="text-2xl sm:text-3xl font-bold mb-2"
              style={{
                fontFamily: "'Syne', sans-serif",
                color: "var(--text-primary)",
              }}
            >
              Szabolcs{" "}
              <span className="text-gradient">Tóthpeti</span>
            </h3>
            <p
              className="text-sm font-medium mb-5"
              style={{
                color: "var(--accent-primary)",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              Frontend Developer — Hungary
            </p>
            <p
              className="text-sm sm:text-base leading-relaxed max-w-lg"
              style={{ color: "var(--text-secondary)" }}
            >
              From carpentry to code — I bring a unique perspective shaped by
              international experience, hands-on problem solving, and a deep
              passion for building things that work beautifully on the web.
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap justify-center md:justify-start gap-8 mt-8">
              {[
                { value: "6+", label: "Countries Lived In" },
                { value: "2025", label: "CodeCool Graduate" },
                { value: "∞", label: "Curiosity" },
              ].map((stat, i) => (
                <div key={i} className="text-center md:text-left">
                  <p
                    className="text-2xl font-bold"
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      color: "var(--accent-primary)",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-xs mt-1"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — desktop */}
          <div
            className="hidden lg:block absolute left-6 top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(180deg, var(--accent-primary), var(--accent-secondary), transparent)",
            }}
          />

          <div className="flex flex-col gap-8">
            {timelineItems.map((item, i) => (
              <div
                key={i}
                className="relative flex flex-col lg:flex-row items-start gap-4 lg:gap-8 transition-all duration-700"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(30px)",
                  transitionDelay: `${400 + i * 200}ms`,
                }}
              >
                {/* Dot on line — desktop */}
                <div className="hidden lg:flex flex-shrink-0 w-12 h-12 items-center justify-center relative z-10">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                    style={{
                      background: "rgba(0, 212, 255, 0.08)",
                      border: "1px solid rgba(0, 212, 255, 0.2)",
                      boxShadow: "0 0 20px rgba(0, 212, 255, 0.1)",
                    }}
                  >
                    {item.emoji}
                  </div>
                </div>

                {/* Card */}
                <div
                  className="glass-card flex-1 p-6 w-full"
                  style={{
                    background: "var(--bg-glass)",
                    borderRadius: "var(--radius-lg)",
                  }}
                >
                  {/* Mobile emoji */}
                  <span className="lg:hidden text-2xl mb-3 block">
                    {item.emoji}
                  </span>

                  <h4
                    className="text-base sm:text-lg font-bold mb-3"
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      color: "var(--text-primary)",
                    }}
                  >
                    {item.title}
                  </h4>

                  {/* Divider */}
                  <div
                    className="w-10 h-[2px] rounded-full mb-4"
                    style={{ background: "var(--gradient-primary)" }}
                  />

                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
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

export default AboutMe;
