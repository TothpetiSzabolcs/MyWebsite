import { useState } from "react";

const ServiceCard = ({ icon, title, description, index = 0 }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Hover glow behind card */}
      <div
        className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(123, 97, 255, 0.15))",
          filter: "blur(20px)",
        }}
      />

      {/* Gradient border on hover */}
      <div
        className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
        }}
      />

      {/* Card body */}
      <div
        className="relative h-full flex flex-col items-center text-center px-6 py-8 rounded-2xl transition-all duration-500"
        style={{
          background: hovered ? "rgba(15, 16, 25, 0.95)" : "var(--bg-glass)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(255, 255, 255, 0.04)",
        }}
      >
        {/* Icon container */}
        <div
          className="w-16 h-16 flex items-center justify-center rounded-xl mb-6 transition-all duration-500"
          style={{
            background: hovered
              ? "rgba(0, 212, 255, 0.1)"
              : "rgba(255, 255, 255, 0.03)",
            border: `1px solid ${hovered ? "rgba(0, 212, 255, 0.2)" : "rgba(255, 255, 255, 0.06)"}`,
            boxShadow: hovered
              ? "0 0 30px rgba(0, 212, 255, 0.15)"
              : "none",
          }}
        >
          <div
            className="text-3xl transition-all duration-500"
            style={{
              color: hovered ? "var(--accent-primary)" : "var(--text-secondary)",
              transform: hovered ? "scale(1.1)" : "scale(1)",
            }}
          >
            {icon}
          </div>
        </div>

        {/* Title */}
        <h3
          className="text-lg font-bold mb-3 transition-colors duration-500"
          style={{
            fontFamily: "'Syne', sans-serif",
            color: hovered ? "var(--text-primary)" : "var(--text-secondary)",
          }}
        >
          {title}
        </h3>

        {/* Divider */}
        <div
          className="w-8 h-[2px] rounded-full mb-4 transition-all duration-500"
          style={{
            background: hovered
              ? "var(--gradient-primary)"
              : "rgba(255, 255, 255, 0.08)",
            width: hovered ? "48px" : "32px",
          }}
        />

        {/* Description */}
        <p
          className="text-sm leading-relaxed transition-colors duration-500"
          style={{
            color: hovered ? "var(--text-secondary)" : "var(--text-muted)",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
