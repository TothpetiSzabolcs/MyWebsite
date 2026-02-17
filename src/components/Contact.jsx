import { useEffect, useState } from "react";
import { FaMobileAlt } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import emailjs from "emailjs-com";

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const email = formData.get("email");
    const message = formData.get("message");

    if (!email) {
      setError("Email is required");
      setTimeout(() => setError(false), 3000);
      return;
    }

    if (message.length < 10) {
      setError("Message must be at least 10 characters");
      setTimeout(() => setError(false), 3000);
      return;
    }

    if (message.length > 1000) {
      setError("Message must be less than 1000 characters");
      setTimeout(() => setError(false), 3000);
      return;
    }

    try {
      setLoading(true);
      await emailjs.sendForm(
        "service_nnm3h2a",
        "template_trcpprl",
        e.target,
        "VyUMzb_2NCj2RE3BC"
      );
      setSent(true);
      setTimeout(() => setSent(false), 3000);
      setError(false);
      form.reset();
    } catch (err) {
      setError("Failed to send. Please try again.");
      setTimeout(() => setError(false), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Background orbs */}
      <div
        className="gradient-orb w-[500px] h-[500px] top-[-100px] right-[-150px]"
        style={{ background: "var(--accent-secondary)" }}
      />
      <div
        className="gradient-orb w-[400px] h-[400px] bottom-[-100px] left-[-100px]"
        style={{ background: "var(--accent-primary)", animationDelay: "4s" }}
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
            Contact
          </p>
          <h2 className="section-title mb-4">Get in Touch</h2>
          <p className="max-w-md text-sm" style={{ color: "var(--text-muted)" }}>
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left column — Contact options */}
          <div
            className="lg:col-span-2 flex flex-col gap-4 transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-30px)",
            }}
          >
            {/* Phone card */}
            <div className="glass-card p-6 flex items-start gap-5 group">
              <div
                className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl transition-all duration-300"
                style={{
                  background: "rgba(0, 212, 255, 0.06)",
                  border: "1px solid rgba(0, 212, 255, 0.12)",
                }}
              >
                <HiOutlinePhone
                  className="w-5 h-5 transition-colors duration-300"
                  style={{ color: "var(--accent-primary)" }}
                />
              </div>
              <div>
                <h3
                  className="text-sm font-bold mb-1"
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    color: "var(--text-primary)",
                  }}
                >
                  Give me a call
                </h3>
                <p
                  className="text-xs mb-3 leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  Available for calls during business hours (CET).
                </p>
                <a
                  href="tel:+36302829438"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:gap-3"
                  style={{
                    color: "var(--accent-primary)",
                    fontFamily: "'Syne', sans-serif",
                  }}
                >
                  <FaMobileAlt className="w-3.5 h-3.5" />
                  +36 30 282 9438
                </a>
              </div>
            </div>

            {/* Email info card */}
            <div className="glass-card p-6 flex items-start gap-5 group">
              <div
                className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl transition-all duration-300"
                style={{
                  background: "rgba(123, 97, 255, 0.06)",
                  border: "1px solid rgba(123, 97, 255, 0.12)",
                }}
              >
                <HiOutlineMail
                  className="w-5 h-5 transition-colors duration-300"
                  style={{ color: "var(--accent-secondary)" }}
                />
              </div>
              <div>
                <h3
                  className="text-sm font-bold mb-1"
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    color: "var(--text-primary)",
                  }}
                >
                  Send an email
                </h3>
                <p
                  className="text-xs mb-3 leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  Prefer writing? Fill out the form or email me directly.
                </p>
                <span
                  className="text-sm font-semibold"
                  style={{
                    color: "var(--accent-secondary)",
                    fontFamily: "'Syne', sans-serif",
                  }}
                >
                  Use the form →
                </span>
              </div>
            </div>

            {/* Quick note card */}
            <div
              className="glass-card p-6"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0, 212, 255, 0.04), rgba(123, 97, 255, 0.04))",
              }}
            >
              <p
                className="text-xs leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                <span
                  className="font-semibold"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Response time:
                </span>{" "}
                I typically respond within 24 hours. For urgent matters, please
                call directly.
              </p>
            </div>
          </div>

          {/* Right column — Form */}
          <div
            className="lg:col-span-3 transition-all duration-700 delay-200"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(30px)",
            }}
          >
            <div
              className="glass-card p-6 sm:p-8"
              style={{
                background: "var(--bg-glass)",
                borderRadius: "var(--radius-lg)",
              }}
            >
              <h3
                className="text-lg font-bold mb-1"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  color: "var(--text-primary)",
                }}
              >
                Send a message
              </h3>
              <p
                className="text-xs mb-6"
                style={{ color: "var(--text-muted)" }}
              >
                Fill out the form and I'll get back to you soon.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Email input */}
                  <div>
                    <label
                      className="block text-xs font-medium mb-2"
                      style={{
                        color: "var(--text-secondary)",
                        fontFamily: "'Syne', sans-serif",
                      }}
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="hello@example.com"
                      className="w-full h-12 px-4 rounded-xl text-sm outline-none transition-all duration-300 placeholder:text-[var(--text-muted)]"
                      style={{
                        background: "rgba(255, 255, 255, 0.03)",
                        border: "1px solid rgba(255, 255, 255, 0.06)",
                        color: "var(--text-primary)",
                        fontFamily: "'Outfit', sans-serif",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "rgba(0, 212, 255, 0.3)";
                        e.target.style.boxShadow = "0 0 20px rgba(0, 212, 255, 0.05)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(255, 255, 255, 0.06)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  {/* Message textarea */}
                  <div>
                    <label
                      className="block text-xs font-medium mb-2"
                      style={{
                        color: "var(--text-secondary)",
                        fontFamily: "'Syne', sans-serif",
                      }}
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 resize-none placeholder:text-[var(--text-muted)]"
                      style={{
                        background: "rgba(255, 255, 255, 0.03)",
                        border: "1px solid rgba(255, 255, 255, 0.06)",
                        color: "var(--text-primary)",
                        fontFamily: "'Outfit', sans-serif",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "rgba(0, 212, 255, 0.3)";
                        e.target.style.boxShadow = "0 0 20px rgba(0, 212, 255, 0.05)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(255, 255, 255, 0.06)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  {/* Error message */}
                  {error && (
                    <div
                      className="px-4 py-2.5 rounded-xl text-xs font-medium"
                      style={{
                        background: "rgba(239, 68, 68, 0.08)",
                        border: "1px solid rgba(239, 68, 68, 0.2)",
                        color: "#ef4444",
                      }}
                    >
                      {error}
                    </div>
                  )}

                  {/* Submit button */}
                  {sent ? (
                    <button
                      type="button"
                      className="w-full h-12 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold transition-all duration-300"
                      style={{
                        background: "rgba(34, 197, 94, 0.12)",
                        border: "1px solid rgba(34, 197, 94, 0.3)",
                        color: "#22c55e",
                        fontFamily: "'Syne', sans-serif",
                      }}
                    >
                      <IoSend className="w-4 h-4" />
                      Sent successfully!
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-glow w-full justify-center h-12 text-sm"
                      style={{
                        opacity: loading ? 0.7 : 1,
                        cursor: loading ? "not-allowed" : "pointer",
                      }}
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <svg
                            className="animate-spin w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                              className="opacity-25"
                            />
                            <path
                              d="M4 12a8 8 0 018-8"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                            />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <IoSend className="w-4 h-4" />
                          Send Message
                        </span>
                      )}
                    </button>
                  )}
                </form>
            </div>
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

export default Contact;
