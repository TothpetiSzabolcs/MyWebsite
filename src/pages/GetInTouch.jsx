import Contact from "../components/Contact";
import SEO from "../components/SEO";

const GetInTouch = () => {
  return (
    <main>
      <SEO
        title="Contact"
        description="Get in touch with Szabolcs Tóthpeti. Available for freelance work, collaborations, and new opportunities in frontend development."
        url="/getintouch"
      />
      <Contact />
    </main>
  );
};

export default GetInTouch;
