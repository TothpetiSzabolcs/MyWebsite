const DEFAULT = {
  title: "Szabolcs Tóthpeti — Web Developer",
  description:
    "Web developer specializing in React, Tailwind CSS, and JavaScript. Building clean, responsive, and modern web applications.",
  image: "/og-image.jpg",
  url: "https://szabolcstothpeti.dev",
};

const SEO = ({
  title,
  description = DEFAULT.description,
  image = DEFAULT.image,
  url,
}) => {
  const pageTitle = title
    ? `${title} | Szabolcs Tóthpeti`
    : DEFAULT.title;

  const pageUrl = url ? `${DEFAULT.url}${url}` : DEFAULT.url;
  const imageUrl = image.startsWith("http") ? image : `${DEFAULT.url}${image}`;

  return (
    <>
      {/* React 19 native document metadata */}
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={pageUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content="Szabolcs Tóthpeti Portfolio" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:creator" content="@STothpeti" />

      {/* Extra */}
      <meta name="author" content="Szabolcs Tóthpeti" />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#0a0a0f" />
    </>
  );
};

export default SEO;
