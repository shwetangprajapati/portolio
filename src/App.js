import React, { useEffect, useState, Suspense } from "react";
import "./App.css";
import { Helmet } from "react-helmet";
import HeroSection from "./components/HeroSection";
import Loader from "./components/Loader";
import SocialShareWeb from "./components/SocialShareWeb";
import SocialShareMobile from "./components/SocialShareMobile";
const About = React.lazy(() => import("./components/About"));
const Projects = React.lazy(() => import("./components/Projects"));
const Skills = React.lazy(() => import("./components/Skills"));
const Studies = React.lazy(() => import("./components/Studies"));
const Footer = React.lazy(() => import("./components/Footer"));

const App = () => {

  const [hideNav, setHideNav] = useState(false);

  useEffect(() => {
    const resize = () => {
      setHideNav(window.innerWidth <= 760);
    };

    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const personStructuredData = {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: "Shwetang Prajapati",
    url: "",
    image: "",
    sameAs: [
      "https://www.linkedin.com/in/shwetang-prajapati-81ab97157/",
      "https://github.com/shwetangprajapati",
    ],
    jobTitle: "Frontend Developer/Web Developer/ React Js Developer",
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(personStructuredData)}
        </script>
      </Helmet>

      <Suspense fallback={<Loader />}>
        {hideNav ? <SocialShareMobile /> : <SocialShareWeb />}
        <HeroSection />
        <About />
        <Projects />

        <Skills />
        <Studies />
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
