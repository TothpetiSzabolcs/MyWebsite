import Services from "../components/Services";
import RecentProjects from "../components/RecentProjects";
import Hero from "../components/Hero";
import SEO from "../components/SEO";

const Home = () => {
  return (
    <main>
      <SEO />
      <Hero />
      <Services />
      <RecentProjects />
    </main>
  );
};

export default Home;
