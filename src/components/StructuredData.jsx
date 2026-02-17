import { useEffect } from "react";

const StructuredData = () => {
  useEffect(() => {
    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Szabolcs Tóthpeti",
      jobTitle: "Frontend Developer",
      url: "https://szabolcstothpeti.dev",
      sameAs: [
        "https://github.com/TothpetiSzabolcs",
        "https://www.linkedin.com/in/szabolcs-tothpeti-7867b52a0/",
        "https://x.com/STothpeti",
        "https://www.instagram.com/szabolcstothpeti/",
        "https://www.facebook.com/szabolcs.tothpeti",
      ],
      knowsAbout: [
        "React",
        "JavaScript",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
        "HTML",
        "CSS",
        "Frontend Development",
      ],
      nationality: { "@type": "Country", name: "Hungary" },
    };

    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Szabolcs Tóthpeti Portfolio",
      url: "https://szabolcstothpeti.dev",
      description:
        "Portfolio website of Szabolcs Tóthpeti, a frontend developer specializing in React and modern web technologies.",
    };

    const inject = (data, id) => {
      let el = document.getElementById(id);
      if (!el) {
        el = document.createElement("script");
        el.id = id;
        el.type = "application/ld+json";
        document.head.appendChild(el);
      }
      el.textContent = JSON.stringify(data);
    };

    inject(personSchema, "schema-person");
    inject(websiteSchema, "schema-website");

    return () => {
      document.getElementById("schema-person")?.remove();
      document.getElementById("schema-website")?.remove();
    };
  }, []);

  return null;
};

export default StructuredData;
