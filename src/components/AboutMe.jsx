import { useEffect } from "react";
import Profile from "../assets/profilePicture.png";

import AOS from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <div className="bg-gray-900 w-full px-6 md:px-12 lg:px-20 py-16 relative">
      <h1
        className="text-3xl font-bold text-blue-500 mb-20 pl-2 md:pl-10"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        Who Am I?
      </h1>

      <div className="flex flex-col items-center justify-center py-10 gap-10">
        <h1 className="text-xl md:text-xl lg:text-xl xl:text-xl font-bold text-white text-center px-4">
          Hi, I'm{" "}
          <span className="text-blue-500 text-3xl md:text-2xl lg:text-3xl xl:text-3xl">
            Szabolcs Tóthpeti
          </span>
        </h1>

        <img
          src={Profile}
          alt="Profile"
          className="w-72 h-72 md:w-96 md:h-96 object-contain rounded-3xl shadow-[0_8px_40px_8px_rgba(59,130,246,0.35)] border-2 border-blue-400"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="200"
        />

        <div className="flex flex-col gap-8 text-gray-300 text-md px-4 xl:max-w-5xl lg:max-w-3xl md:max-w-2xl max-w-lg">
          <p
            className="font-Bonheur Royale text-left"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            My name is Szabolcs Tóthpeti, and I was born on August 19, 1995 in
            Nagykanizsa, Hungary. I have a strong foundation in the English
            language, having studied it for twelve years. My first profession
            was as a carpenter, but at the age of eighteen, I moved to the
            United Kingdom and spent about a year working in London. After
            returning to Hungary, I completed my high school diploma and then
            relocated to Austria for work. I spent six years in Austria before
            deciding to pursue a career in programming. During this
            transformative period of my life, I also got married and became a
            father.
          </p>

          <p
            className="text-left"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            My journey into programming began at CodeCool, where I graduated in
            July 2025. Throughout my studies, I gained hands-on experience with
            a wide range of technologies and tools, including HTML, CSS,
            JavaScript, React, Express, Node.js, MongoDB, Tailwind CSS,
            API development, backend server management, the use of external
            libraries, as well as the application and integration of AI tools.
            Today, I am passionate about building modern, responsive web
            applications and constantly expanding my skill set. I am eager
            to leverage both my diverse professional background and my technical
            knowledge to contribute to innovative projects and collaborative
            teams.
          </p>

          <p
            className="text-left"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            As I continue my journey as a developer, my main goal is to
            constantly learn and grow in the ever-evolving world of technology.
            I am excited by the endless possibilities that web development
            offers—from building intuitive user experiences and robust backend
            systems, to exploring the frontiers of artificial intelligence and
            cloud computing. I aspire to contribute to meaningful, innovative
            projects that make a real difference in people's lives. Whether
            working as part of a collaborative team or taking the lead on new
            initiatives, I am committed to delivering high-quality, maintainable
            solutions and staying up-to-date with the latest trends and best
            practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
