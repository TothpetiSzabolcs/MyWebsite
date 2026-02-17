import AboutMe from "../components/AboutMe";
import SEO from "../components/SEO";

const WhoAmI = () => {
  return (
    <main>
      <SEO
        title="Who Am I"
        description="Learn about Szabolcs Tóthpeti — from carpentry to code. A frontend developer with international experience, passionate about building modern web applications."
        url="/whoami"
      />
      <AboutMe />
    </main>
  );
};

export default WhoAmI;
