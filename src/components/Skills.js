import React from "react";
import Lottie from "react-lottie";
import animationData from "../lotties/skills.json";
const Skills = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const tech = [
    "React.js",
    "Next.js",
    "JavaScript",
    "Front-end Development",
    "HTML5",
    "Agile Methodologies",
    "CSS",
    "JSX",
    "Component Based Approach",
    "Redux",
    "React Router",
    "Responsive Design",
    "Webpack",
    "Babel",
    "Structured Schemas",
    "Git",
    "Tailwind CSS",
    "Restful API",

    "SEO Principles",

    "web Development",
    "ES6",
    "Front-end Libraries",
  ];
  return (
    <section>
      <div className="m-8 max-w-screen-xl mx-auto px-4  sm:px-6 lg:px-8 py-8 ">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 items-center">
          <div>
            <div className="mx-auto max-w-xl text-center sm:text-inherit">
              <h2 className=" sm:text-4xl text-2xl font-bold text-black underline underline-offset-3 decoration-8 decoration-amber-400 pb-8 sm:pb-16 ">
                My Skills
              </h2>

              <div className=" text-white/90 sm:mt-4 sm:block">
                {tech?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="inline-block rounded m-1 bg-black px-8 py-3 text-sm font-medium text-white transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring shadow-md shadow-amber-400/50"
                      href="/download"
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 md:grid-cols-1 lg:grid-cols-1">
            <div className="lottie-container">
              <Lottie options={defaultOptions} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
