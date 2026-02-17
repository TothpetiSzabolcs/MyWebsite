import { FaInstagram, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { HiArrowDown } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import CV_HU from "../assets/CV.pdf";
import CV_EN from "../assets/CV_EN.pdf";
import Profile from "../assets/profilePicture.webp";

const socials = [
  { icon: FaInstagram, href: "https://www.instagram.com/szabolcstothpeti/", label: "Instagram" },
  { icon: FaFacebook, href: "https://www.facebook.com/szabolcs.tothpeti", label: "Facebook" },
  { icon: FaSquareXTwitter, href: "https://x.com/STothpeti", label: "X" },
  { icon: FaGithub, href: "https://github.com/TothpetiSzabolcs", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/szabolcs-tothpeti-7867b52a0/", label: "LinkedIn" },
];

const Hero = () => {
  const [visible, setVisible] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);
  const cvRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (cvRef.current && !cvRef.current.contains(e.target)) setCvOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <section
      className="relative w-full flex items-center overflow-hidden"
      style={{ background: "var(--bg-primary)", minHeight: "calc(100vh - 80px)" }}
    >
      {/* Background gradient orbs */}
      <div
        className="gradient-orb w-[500px] h-[500px] -top-40 -left-40"
        style={{ background: "var(--accent-primary)" }}
      />
      <div
        className="gradient-orb w-[400px] h-[400px] bottom-[-100px] right-[-100px]"
        style={{
          background: "var(--accent-secondary)",
          animationDelay: "3s",
        }}
      />
      <div
        className="gradient-orb w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          background: "var(--accent-warm)",
          opacity: 0.06,
          animationDelay: "5s",
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-main w-full py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left — Text */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl relative z-20">
            {/* Tag */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 transition-all duration-700"
              style={{
                background: "rgba(0, 212, 255, 0.06)",
                border: "1px solid rgba(0, 212, 255, 0.15)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "var(--accent-primary)" }}
              />
              <span
                className="text-xs font-medium tracking-wide uppercase"
                style={{ color: "var(--accent-primary)", fontFamily: "'Syne', sans-serif" }}
              >
                Available for work
              </span>
            </div>

            {/* Heading */}
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 transition-all duration-700 delay-100"
              style={{
                fontFamily: "'Syne', sans-serif",
                color: "var(--text-primary)",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
              }}
            >
              Hi, I'm{" "}
              <span className="text-gradient">Szabolcs Tóthpeti</span>
            </h1>

            <h2
              className="text-lg sm:text-xl font-medium mb-6 transition-all duration-700 delay-200"
              style={{
                color: "var(--text-secondary)",
                fontFamily: "'Syne', sans-serif",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
              }}
            >
              Frontend Developer
            </h2>

            {/* Description */}
            <p
              className="text-sm sm:text-base leading-relaxed max-w-md mb-8 transition-all duration-700 delay-300"
              style={{
                color: "var(--text-secondary)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
              }}
            >
              I'm focused on building clean and responsive user interfaces with
              React, Tailwind CSS and JavaScript or TypeScript. I enjoy turning
              complex problems into intuitive, user-friendly solutions.
            </p>

            {/* Buttons */}
            <div
              className="flex flex-wrap items-center gap-4 mb-10 transition-all duration-700 delay-400"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
              }}
            >
              <div className="relative z-50" ref={cvRef}>
                <button
                  onClick={() => setCvOpen(!cvOpen)}
                  className="btn-glow flex items-center gap-2"
                >
                  Download CV
                  <HiArrowDown
                    className={`w-4 h-4 transition-transform duration-300 ${cvOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {cvOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 min-w-[180px] py-2 rounded-xl"
                    style={{
                      zIndex: 9999,
                      background: "rgba(10, 10, 15, 0.98)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(0, 212, 255, 0.25)",
                      boxShadow:
                        "0 12px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 212, 255, 0.08)",
                    }}
                  >
                    <a
                      href={CV_HU}
                      download="Tothpeti_Szabolcs_CV_HU.pdf"
                      className="flex items-center gap-3 px-5 py-3 text-sm font-medium transition-colors duration-200 hover:bg-white/8"
                      style={{ color: "var(--text-primary)" }}
                      onClick={() => setCvOpen(false)}
                    >
                      <span>🇭🇺</span>
                      <span>Magyar</span>
                    </a>
                    <div
                      className="mx-4 my-1"
                      style={{
                        height: "1px",
                        background: "rgba(255,255,255,0.08)",
                      }}
                    />
                    <a
                      href={CV_EN}
                      download="Tothpeti_Szabolcs_CV_EN.pdf"
                      className="flex items-center gap-3 px-5 py-3 text-sm font-medium transition-colors duration-200 hover:bg-white/8"
                      style={{ color: "var(--text-primary)" }}
                      onClick={() => setCvOpen(false)}
                    >
                      <span>🇬🇧</span>
                      <span>English</span>
                    </a>
                  </div>
                )}
              </div>
              <Link to="/getintouch" className="btn-ghost">
                Get in Touch
              </Link>
            </div>

            {/* Socials */}
            <div
              className="relative z-10 flex items-center gap-3 transition-all duration-700 delay-500"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
              }}
            >
              {socials.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  to={href}
                  target="_blank"
                  className="group w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300"
                  style={{
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                  }}
                  aria-label={label}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(0, 212, 255, 0.1)";
                    e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.3)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.06)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <Icon className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--accent-primary)] transition-colors duration-300" />
                </Link>
              ))}
            </div>
          </div>

          {/* Right — Profile Image */}
          <div
            className="relative transition-all duration-1000 delay-300"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.95)",
            }}
          >
            {/* Glow behind frame */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(0, 212, 255, 0.25), transparent 60%)",
                filter: "blur(50px)",
                transform: "scale(1.4)",
              }}
            />

            {/* Hexagon frame + Image that overflows */}
            <div
              className="relative w-64 h-72 sm:w-72 sm:h-80 lg:w-80 lg:h-[22rem] xl:w-96 xl:h-[26rem]"
            >
              {/* Hexagon border (outer) */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  background: "linear-gradient(135deg, rgba(0, 212, 255, 0.4), rgba(123, 97, 255, 0.3))",
                }}
              />

              {/* Hexagon inner (background fill) */}
              <div
                className="absolute inset-[2px]"
                style={{
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  background: "linear-gradient(180deg, rgba(0, 212, 255, 0.06), rgba(10, 10, 15, 0.9))",
                }}
              />

              {/* Animated rotating glow ring */}
              <div
                className="absolute -inset-3 animate-[spin_12s_linear_infinite] opacity-30"
                style={{
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  background: "conic-gradient(from 0deg, transparent, var(--accent-primary), transparent, var(--accent-secondary), transparent)",
                }}
              />

              {/* Image — overflows from top of hexagon */}
              <img
                src={Profile}
                alt="Szabolcs Tóthpeti"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[110%] max-w-none object-contain pointer-events-none z-10 drop-shadow-[0_0_30px_rgba(0,212,255,0.2)]"
              />
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-30 glass-card px-5 py-2.5 flex items-center gap-2"
              style={{
                background: "rgba(15, 16, 25, 0.85)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(0, 212, 255, 0.12)",
                borderRadius: "var(--radius-md)",
                whiteSpace: "nowrap",
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: "#22c55e" }}
              />
              <span
                className="text-xs font-medium"
                style={{ color: "var(--text-secondary)", fontFamily: "'Syne', sans-serif" }}
              >
                Based in Hungary
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 delay-700"
        style={{
          opacity: visible ? 0.4 : 0,
        }}
      >
        <span
          className="text-xs tracking-widest uppercase"
          style={{ color: "var(--text-muted)", fontFamily: "'Syne', sans-serif" }}
        >
          Scroll
        </span>
        <HiArrowDown
          className="w-4 h-4 animate-bounce"
          style={{ color: "var(--text-muted)" }}
        />
      </div>
    </section>
  );
};

export default Hero;
