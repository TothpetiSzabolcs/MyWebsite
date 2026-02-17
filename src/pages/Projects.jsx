import { useState, useEffect, useRef } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import SEO from "../components/SEO";

/* ── Images: put hero screenshots in assets folder ── */
import bermudaImg from "../assets/bermuda-hero.jpg";
import szelImg from "../assets/szeltech-hero.jpg";

const PROJECTS = [
  {
    id: 1,
    title: "Bermuda Vendégház",
    subtitle: "Full-stack guesthouse platform",
    description:
      "Full-stack guesthouse website near Lake Balaton with a complete booking system, custom admin panel for managing reservations, rooms, gallery, and reviews. Multi-language support in Hungarian, English, and German. Built as a real client project with Express + MongoDB backend.",
    features: [
      "Room booking system with calendar & payment options",
      "Custom admin dashboard (bookings, rooms, gallery, reviews)",
      "Multi-language support (HU / EN / DE)",
      "Guest reviews with moderation panel",
      "Dynamic gallery management with categories",
    ],
    tech: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "i18n"],
    image: bermudaImg,
    liveUrl: "https://bermuda-vendeghaz.hu",
    githubUrl: "https://github.com/TothpetiSzabolcs/Bermuda-Guesthouse",
    color: "#22c55e",
    year: "2025",
  },
  {
    id: 2,
    title: "SzelTech",
    subtitle: "CNC machining company website",
    description:
      "Professional multi-language website for a CNC machining company. Dark luxe industrial design with a quote request form, completed parts gallery, and company services section. Fully localized in Hungarian, English, and German.",
    features: [
      "Multi-language support (HU / EN / DE)",
      "Quote request contact form",
      "Product gallery with completed CNC parts",
      "Dark premium industrial design",
      "SEO optimized with Next.js SSR",
    ],
    tech: ["Next.js", "Tailwind CSS", "i18n"],
    image: szelImg,
    liveUrl: "https://szeltech.hu/hu",
    githubUrl: "https://github.com/TothpetiSzabolcs/szeltech.hu",
    color: "#d4a843",
    year: "2026",
  },
];

/* ────────── Single Project Card ────────── */
const ProjectCard = ({ project, index, isVisible }) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className="relative transition-all duration-1000"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${index * 200}ms`,
      }}
    >
      {/* Large project number watermark */}
      <span
        className="absolute -top-8 left-0 font-bold text-7xl pointer-events-none select-none"
        style={{
          fontFamily: "'Syne', sans-serif",
          color: "transparent",
          WebkitTextStroke: `1px rgba(${project.color === "#22c55e" ? "34,197,94" : "212,168,67"}, 0.12)`,
        }}
      >
        0{project.id}
      </span>

      <div
        className="relative glass-card overflow-hidden"
        style={{
          borderRadius: "var(--radius-xl)",
          border: "1px solid var(--border-subtle)",
        }}
      >
        <div
          className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-0`}
        >
          {/* ── Image Side ── */}
          <div className="relative lg:w-[55%] overflow-hidden group">
            <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Desktop side gradient */}
              <div
                className="absolute inset-0 pointer-events-none hidden lg:block"
                style={{
                  background: isEven
                    ? "linear-gradient(to right, transparent 50%, rgba(10,10,15,0.9))"
                    : "linear-gradient(to left, transparent 50%, rgba(10,10,15,0.9))",
                }}
              />
              {/* Mobile bottom gradient */}
              <div
                className="absolute inset-0 pointer-events-none lg:hidden"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 50%, rgba(10,10,15,0.95))",
                }}
              />
            </div>

            {/* Year badge */}
            <div
              className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-full"
              style={{
                fontFamily: "'Syne', sans-serif",
                background: `${project.color}20`,
                color: project.color,
                border: `1px solid ${project.color}40`,
              }}
            >
              {project.year}
            </div>
          </div>

          {/* ── Content Side ── */}
          <div className="relative lg:w-[45%] p-8 lg:p-10 flex flex-col justify-center">
            <span
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{
                fontFamily: "'Syne', sans-serif",
                color: project.color,
              }}
            >
              {project.subtitle}
            </span>

            <h3
              className="text-2xl lg:text-3xl font-bold mb-4"
              style={{
                fontFamily: "'Syne', sans-serif",
                color: "var(--text-primary)",
              }}
            >
              {project.title}
            </h3>

            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "var(--text-secondary)" }}
            >
              {project.description}
            </p>

            {/* Feature list */}
            <div className="space-y-2 mb-6">
              {project.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                    style={{ background: project.color }}
                  />
                  <span
                    className="text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Tech stack pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs font-medium rounded-full"
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--text-secondary)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Action links */}
            <div className="flex items-center gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow flex items-center gap-2"
                style={{
                  background: `linear-gradient(135deg, ${project.color}, ${project.color}cc)`,
                  fontSize: "0.85rem",
                  padding: "0.65rem 1.5rem",
                }}
              >
                <FiExternalLink className="w-4 h-4" />
                Live Site
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost flex items-center gap-2"
                style={{
                  fontSize: "0.85rem",
                  padding: "0.65rem 1.5rem",
                  borderColor: `${project.color}40`,
                  color: project.color,
                }}
              >
                <FiGithub className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ────────── Projects Page ────────── */
const Projects = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <SEO
        title="Projects"
        description="Portfolio of recent projects by Szabolcs Tóthpeti — web applications built with React, Next.js, and modern frontend technologies."
        url="/projects"
      />

      <section
        ref={sectionRef}
        className="relative w-full overflow-hidden"
        style={{ background: "var(--bg-primary)" }}
      >
        {/* Background orbs */}
        <div
          className="gradient-orb w-[500px] h-[500px] -top-48 -right-48"
          style={{ background: "var(--accent-primary)" }}
        />
        <div
          className="gradient-orb w-[400px] h-[400px] bottom-48 -left-48"
          style={{ background: "var(--accent-secondary)", animationDelay: "3s" }}
        />

        <div className="relative z-10 container-main py-16 lg:py-20">
          {/* Section header */}
          <div
            className="mb-16 transition-all duration-1000"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
            }}
          >
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{
                fontFamily: "'Syne', sans-serif",
                color: "var(--accent-primary)",
              }}
            >
              Portfolio
            </span>
            <h2 className="section-title mt-2 mb-4">My Projects</h2>
            <p
              className="max-w-lg text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              Real-world web applications built for clients and businesses. Each
              project represents a unique challenge solved with modern
              technologies.
            </p>
          </div>

          {/* Project cards */}
          <div className="space-y-24">
            {PROJECTS.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isVisible={visible}
              />
            ))}
          </div>

          {/* Bottom CTA */}
          <div
            className="text-center mt-20 transition-all duration-1000 delay-500"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <p
              className="text-sm mb-2"
              style={{ color: "var(--text-muted)" }}
            >
              Interested in working together?
            </p>
            <a
              href="/getintouch"
              className="btn-glow inline-flex items-center gap-2"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
