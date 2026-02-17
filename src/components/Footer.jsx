import { FaInstagram, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiArrowUp } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";

const socials = [
  { icon: FaInstagram, href: "https://www.instagram.com/szabolcstothpeti/", label: "Instagram" },
  { icon: FaFacebook, href: "https://www.facebook.com/szabolcs.tothpeti", label: "Facebook" },
  { icon: FaXTwitter, href: "https://x.com/STothpeti", label: "X" },
  { icon: FaGithub, href: "https://github.com/TothpetiSzabolcs", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/szabolcs-tothpeti-7867b52a0/", label: "LinkedIn" },
];

const quickLinks = [
  { to: "/whoami", label: "Who Am I?" },
  { to: "/projects", label: "Projects" },
  { to: "/getintouch", label: "Contact" },
  { to: "/experience", label: "Experience" },
];

const Footer = () => {
  const location = useLocation();

  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{ background: "var(--bg-secondary)" }}
    >
      {/* Top gradient line */}
      <div
        className="w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--accent-primary), var(--accent-secondary), transparent)",
        }}
      />

      <div className="relative z-10 container-main pt-12 pb-6">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-10">
          {/* Brand column */}
          <div className="flex flex-col items-center md:items-start">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <h2
                className="text-2xl font-bold mb-1 transition-opacity duration-300 hover:opacity-70"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                <span className="text-gradient">Szabolcs</span>
                <span style={{ color: "var(--text-muted)" }}> Tóthpeti</span>
              </h2>
            </Link>
            <p
              className="text-xs mb-6"
              style={{
                color: "var(--text-muted)",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              Web Developer
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  to={href}
                  target="_blank"
                  className="w-9 h-9 flex items-center justify-center rounded-lg transition-all duration-300"
                  style={{
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(0, 212, 255, 0.1)";
                    e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.25)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.06)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                  aria-label={label}
                >
                  <Icon
                    className="w-3.5 h-3.5"
                    style={{ color: "var(--text-muted)" }}
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick links column */}
          <div className="flex flex-col items-center md:items-start">
            <h3
              className="text-xs font-semibold tracking-[0.15em] uppercase mb-5"
              style={{
                color: "var(--text-secondary)",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              Quick Links
            </h3>
            <nav className="flex flex-col items-center md:items-start gap-3">
              {quickLinks.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-sm transition-all duration-300 hover:translate-x-1"
                    style={{
                      color: isActive
                        ? "var(--accent-primary)"
                        : "var(--text-muted)",
                      fontFamily: "'Outfit', sans-serif",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive)
                        e.currentTarget.style.color = "var(--text-secondary)";
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive)
                        e.currentTarget.style.color = "var(--text-muted)";
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Back to top + info column */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex items-center gap-2.5 px-5 py-2.5 rounded-xl transition-all duration-300"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0, 212, 255, 0.08)";
                e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.2)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.06)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <HiArrowUp
                className="w-4 h-4"
                style={{ color: "var(--accent-primary)" }}
              />
              <span
                className="text-xs font-medium"
                style={{
                  color: "var(--text-secondary)",
                  fontFamily: "'Syne', sans-serif",
                }}
              >
                Back to top
              </span>
            </button>

            <div className="text-center md:text-right">
              <p
                className="text-xs leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                Designed & built with
              </p>
              <p
                className="text-xs font-medium mt-1"
                style={{ color: "var(--text-secondary)" }}
              >
                React + Tailwind CSS
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.04)",
          }}
        >
          <p
            className="text-xs"
            style={{
              color: "var(--text-muted)",
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            © 2025 Szabolcs Tóthpeti. All rights reserved.
          </p>

          <div className="flex items-center gap-1.5">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--accent-primary)", opacity: 0.5 }}
            />
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--accent-secondary)", opacity: 0.5 }}
            />
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--accent-warm)", opacity: 0.5 }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
