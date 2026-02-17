import { useState, useEffect, useCallback } from "react";
import bermudaImg from "../assets/bermuda-hero.jpg";
import szelImg from "../assets/szeltech-hero.jpg";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

const projects = [
  {
    image: bermudaImg,
    title: "Bermuda Vendégház",
    tag: "React",
    url: "https://bermuda-vendeghaz.hu",
  },
  {
    image: szelImg,
    title: "SzelTech",
    tag: "Next.js",
    url: "https://szeltech.hu/hu",
  },
];

const RecentProjects = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(null);

  const goTo = useCallback(
    (index) => {
      setDirection(index > active ? "right" : "left");
      setActive(index);
    },
    [active]
  );

  const prev = () =>
    goTo(active === 0 ? projects.length - 1 : active - 1);

  const next = () =>
    goTo(active === projects.length - 1 ? 0 : active + 1);

  // Auto-advance (only if 3+ projects)
  useEffect(() => {
    if (projects.length < 3) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [active]);

  // Keyboard nav
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [active]);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Background orb */}
      <div
        className="gradient-orb w-[500px] h-[500px] top-1/2 left-[-200px] -translate-y-1/2"
        style={{ background: "var(--accent-primary)", animationDelay: "1s" }}
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
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-6">
          <div>
            <p
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
              style={{
                color: "var(--accent-primary)",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              Portfolio
            </p>
            <h2 className="section-title">Recent Projects</h2>
          </div>

          {/* Navigation arrows — desktop */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={prev}
              className="w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-300"
              style={{
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0, 212, 255, 0.1)";
                e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
              }}
              aria-label="Previous project"
            >
              <HiArrowLeft className="w-5 h-5 text-[var(--text-secondary)]" />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-300"
              style={{
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0, 212, 255, 0.1)";
                e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
              }}
              aria-label="Next project"
            >
              <HiArrowRight className="w-5 h-5 text-[var(--text-secondary)]" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Cards row */}
          <div className="flex gap-5 overflow-hidden">
            {projects.map((project, i) => {
              const isActive = i === active;
              const isPrev =
                i === (active - 1 + projects.length) % projects.length;
              const isNext = i === (active + 1) % projects.length;
              const isVisible = isActive || isPrev || isNext;

              return (
                <div
                  key={i}
                  className="flex-shrink-0 w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] xl:w-[calc(33.333%-14px)] transition-all duration-700 cursor-pointer"
                  style={{
                    opacity: isActive ? 1 : isVisible ? 0.5 : 0,
                    transform: isActive ? "scale(1)" : "scale(0.95)",
                    order: (() => {
                      const diff =
                        (i - active + projects.length) % projects.length;
                      if (diff === 0) return 1;
                      if (diff === 1) return 2;
                      if (diff === projects.length - 1) return 0;
                      return 3;
                    })(),
                  }}
                  onClick={() => {
                    if (i === active && project.url) {
                      window.open(project.url, "_blank", "noopener,noreferrer");
                    } else {
                      goTo(i);
                    }
                  }}
                >
                  <div className="group relative rounded-2xl overflow-hidden">
                    {/* Gradient border on active */}
                    {isActive && (
                      <div
                        className="absolute -inset-[1px] rounded-2xl z-0"
                        style={{
                          background:
                            "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                        }}
                      />
                    )}

                    <div
                      className="relative rounded-2xl overflow-hidden"
                      style={{
                        border: isActive
                          ? "none"
                          : "1px solid rgba(255, 255, 255, 0.06)",
                      }}
                    >
                      {/* Image */}
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>

                      {/* Overlay gradient */}
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(180deg, transparent 40%, rgba(10, 10, 15, 0.95))",
                        }}
                      />

                      {/* Tag badge */}
                      <div
                        className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium"
                        style={{
                          background: "rgba(0, 212, 255, 0.12)",
                          color: "var(--accent-primary)",
                          border: "1px solid rgba(0, 212, 255, 0.2)",
                          fontFamily: "'Syne', sans-serif",
                          backdropFilter: "blur(8px)",
                        }}
                      >
                        {project.tag}
                      </div>

                      {/* Info at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <h3
                          className="text-lg font-bold mb-1"
                          style={{
                            color: "var(--text-primary)",
                            fontFamily: "'Syne', sans-serif",
                          }}
                        >
                          {project.title}
                        </h3>
                        <div
                          className="h-[2px] w-8 rounded-full transition-all duration-500 group-hover:w-16"
                          style={{ background: "var(--gradient-primary)" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots + mobile arrows */}
        <div className="flex items-center justify-center gap-6 mt-10">
          {/* Mobile arrows */}
          <button
            onClick={prev}
            className="sm:hidden w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300"
            style={{
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
            aria-label="Previous"
          >
            <HiArrowLeft className="w-4 h-4 text-[var(--text-secondary)]" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="transition-all duration-500"
                style={{
                  width: i === active ? "32px" : "8px",
                  height: "8px",
                  borderRadius: "4px",
                  background:
                    i === active
                      ? "var(--accent-primary)"
                      : "rgba(255, 255, 255, 0.15)",
                  cursor: "pointer",
                }}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>

          {/* Mobile arrows */}
          <button
            onClick={next}
            className="sm:hidden w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300"
            style={{
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
            aria-label="Next"
          >
            <HiArrowRight className="w-4 h-4 text-[var(--text-secondary)]" />
          </button>
        </div>

        {/* Counter */}
        <div className="flex justify-center mt-4">
          <span
            className="text-xs tabular-nums"
            style={{
              color: "var(--text-muted)",
              fontFamily: "'Syne', sans-serif",
            }}
          >
            <span style={{ color: "var(--accent-primary)" }}>
              {String(active + 1).padStart(2, "0")}
            </span>
            {" / "}
            {String(projects.length).padStart(2, "0")}
          </span>
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

export default RecentProjects;
