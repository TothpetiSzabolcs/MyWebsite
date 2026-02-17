import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/logo.png";

const navLinks = [
  { to: "/whoami", label: "Who Am I?" },
  { to: "/projects", label: "Projects" },
  { to: "/getintouch", label: "Contact" },
  { to: "/experience", label: "Experience" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 border-b border-white/[0.06]"
            : "py-5 border-b border-transparent"
        }`}
        style={{
          background: scrolled
            ? "rgba(10, 10, 15, 0.75)"
            : "rgba(10, 10, 15, 0.4)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <div className="container-main flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="relative group flex items-center"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              src={logo}
              alt="Logo"
              className={`transition-all duration-500 ${
                scrolled ? "h-12 w-12" : "h-14 w-14"
              } hover:opacity-80`}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isActive
                      ? "text-[var(--accent-primary)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {isActive && (
                    <span
                      className="absolute inset-0 rounded-lg"
                      style={{
                        background: "rgba(0, 212, 255, 0.06)",
                        border: "1px solid rgba(0, 212, 255, 0.12)",
                      }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link to="/getintouch" className="btn-glow text-sm">
              Let's Talk
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg text-white/70 hover:text-white transition-colors duration-300"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <HiMenu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="header-spacer" />

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-[100] transition-all duration-500 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            open ? "backdrop-blur-sm bg-black/60" : ""
          }`}
          onClick={() => setOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-[280px] flex flex-col transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            background: "rgba(15, 16, 25, 0.95)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderLeft: "1px solid rgba(255, 255, 255, 0.06)",
          }}
        >
          {/* Close button */}
          <div className="flex justify-end p-5">
            <button
              className="w-10 h-10 flex items-center justify-center rounded-lg text-white/60 hover:text-white transition-colors duration-300"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
              }}
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <HiX className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Links */}
          <nav className="flex flex-col px-6 mt-6 gap-2">
            {navLinks.map((link, i) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                    isActive
                      ? "text-[var(--accent-primary)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    background: isActive
                      ? "rgba(0, 212, 255, 0.06)"
                      : "transparent",
                    transitionDelay: open ? `${i * 50}ms` : "0ms",
                    transform: open ? "translateX(0)" : "translateX(20px)",
                    opacity: open ? 1 : 0,
                  }}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile CTA */}
          <div className="px-6 mt-8">
            <Link
              to="/getintouch"
              className="btn-glow w-full justify-center text-sm"
              onClick={() => setOpen(false)}
              style={{
                transitionDelay: open ? "200ms" : "0ms",
                transform: open ? "translateX(0)" : "translateX(20px)",
                opacity: open ? 1 : 0,
              }}
            >
              Let's Talk
            </Link>
          </div>

          {/* Bottom decoration */}
          <div className="mt-auto p-6">
            <div
              className="h-px w-full mb-4"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.2), transparent)",
              }}
            />
            <p
              className="text-xs text-center"
              style={{ color: "var(--text-muted)" }}
            >
              © 2025 Szabolcs Tóthpeti
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
