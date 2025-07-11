import { FaMobileAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { IoSend } from "react-icons/io5";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";

import emailjs from "emailjs-com";

import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const email = formData.get("name");
    const message = formData.get("message");

    if (message.length < 10) {
      setError("Message must be at least 10 characters");
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }

    if (message.length > 1000) {
      setError("Message must be less than 1000 characters");
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }

    if (!email) {
      setError("Email is required");
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }

    try {
      const sendedEmail = await emailjs.sendForm(
        "service_nnm3h2a",
        "template_trcpprl",
        e.target,
        "fl541U31RaOoZ4v0K"
      );
      setSent(true);
      setTimeout(() => {
        setSent(false);
      }, 3000);
      setError(false);
      e.target.reset();
    } catch (error) {
      setError("Error sending email");
    } finally {
      setError(false);
    }
  };

  return (
    <div className="bg-gray-900 w-full px-6 md:px-12 lg:px-20 py-[8.3%] relative">
      <h1
        className="text-3xl font-bold text-blue-500 mb-16 w-fit mx-auto text-center lg:text-left lg:mx-0 pt-6 lg:pl-10 xl:pl-10 xl:mx-0 xl:text-left"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        Get in touch
      </h1>

      <div
        className="flex flex-col lg:flex-row items-center justify-center gap-10"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <div className="flex items-center justify-center border-2 border-blue-500 rounded-xl p-8 bg-gray-950 w-full lg:max-w-lg lg:h-103.5 xl:max-w-xl xl:h-103.5">
          <div className="flex flex-col items-center text-center gap-4">
            <h1 className="text-blue-500 text-2xl font-bold">
              Give me a call!
            </h1>
            <p className="text-white text-md">
              If you have any questions, suggestions, or would simply like to
              discuss an idea, please don’t hesitate to give me a call.
            </p>
            <div className="flex items-center justify-center gap-4 pt-4">
              <FaMobileAlt className="text-blue-500 w-6 h-6" />
              <a
                href="tel:+36302829438"
                className="text-blue-500 text-md font-bold"
              >
                +36 30 282 9438
              </a>
            </div>
          </div>
        </div>

        <span className="text-white text-xl font-bold lg:px-8">
          <HiOutlineSwitchHorizontal className="w-10 h-10 text-blue-500" />
        </span>

        <div className="flex flex-col items-center justify-center border-2 border-blue-500 p-8 bg-gray-950 w-full lg:max-w-xl rounded-xl">
          <h1 className="text-blue-500 text-2xl font-bold text-center mb-4">
            Send an E-Mail!
          </h1>
          <p className="text-white text-md text-center mb-6 px-2">
            If you prefer to contact me by email, just fill out the form below.
          </p>

          <form
            action=""
            className="flex flex-col gap-4 w-full max-w-md"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email address"
              className="w-full h-12 p-2 rounded-md border border-gray-700 bg-gray-800 text-white focus:outline-none focus:border-blue-500"
            />
            {error && (
              <p className="text-red-500 text-sm font-semibold text-center">
                {error}
              </p>
            )}

            <textarea
              name="message"
              required
              placeholder="Enter your message..."
              className="w-full h-28 p-2 rounded-md border border-gray-700 bg-gray-800 text-white focus:outline-none focus:border-blue-500"
            />

            <div className="flex justify-center">
              {sent ? (
                <button className="bg-green-700 text-white px-6 py-2 mt-4 rounded-lg font-semibold shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center gap-2">
                  <IoSend size={20} />
                  Successfully sent!
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 mt-4 rounded-lg font-semibold shadow-lg hover:bg-blue-600 transition-all duration-300 flex items-center gap-2"
                >
                  <IoSend size={18} />
                  Send
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
