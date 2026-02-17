import { HiOutlineCodeBracket } from "react-icons/hi2";

const Projects = () => {
  return (
    <main>
      <section
        className="relative w-full flex items-center justify-center overflow-hidden"
        style={{ background: "var(--bg-primary)", minHeight: "calc(100vh - 80px)" }}
      >
        {/* Background orbs */}
        <div
          className="gradient-orb w-[400px] h-[400px] top-[-100px] left-[-100px]"
          style={{ background: "var(--accent-primary)" }}
        />
        <div
          className="gradient-orb w-[300px] h-[300px] bottom-[-100px] right-[-100px]"
          style={{ background: "var(--accent-secondary)", animationDelay: "3s" }}
        />

        <div className="relative z-10 text-center px-6">
          <div
            className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-2xl"
            style={{
              background: "rgba(0, 212, 255, 0.06)",
              border: "1px solid rgba(0, 212, 255, 0.12)",
            }}
          >
            <HiOutlineCodeBracket
              className="w-8 h-8"
              style={{ color: "var(--accent-primary)" }}
            />
          </div>

          <h2 className="section-title mb-4">Projects</h2>

          <p
            className="text-sm max-w-md mx-auto"
            style={{ color: "var(--text-muted)" }}
          >
            This section is under construction. Check back soon for a showcase
            of my latest work.
          </p>

          <div className="flex items-center justify-center gap-2 mt-8">
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "var(--accent-primary)" }}
            />
            <span
              className="text-xs font-medium tracking-wide uppercase"
              style={{
                color: "var(--accent-primary)",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              Coming Soon
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
