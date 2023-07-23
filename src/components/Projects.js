import React from "react";

const Projects = () => {
  const projectNames = [
    {
      index: "0",
      name: "Times Ascent",
      url: "https://timesascent.com",
      shortDesc:
        "TimesAscent is a prominent job portal and career supplement that is affiliated with the widely recognized Indian newspaper, The Times of India.",
      image: "./TimesLogo.webp",
    },
    {
      index: "1",
      name: "Aviral Times",
      url: "https://www.aviraltimes.com",
      shortDesc:
        "Aviraltimes.com is the digital wing of weekly Hindi newspaper - Aviral Times, which brings to its readers the most reliable, authentic and unbiased news summary among Hindi news sites.",
      image: "./aviral.svg",
    },
    {
      index: "2",
      name: "Stock One",
      url: "https://stockone.sashyundai.com",
      shortDesc:
        "Designed to simplify your inventory/stock management and VIN allocation to create transparency among SAS Hyundai Lucknow sales team.",
      image: "./stockone.svg",
    },
    {
      index: "3",
      name: "Rozgaar India",
      url: "https://www.rozgaarindia.com",
      shortDesc:
        "Rozgaarindia.com is revolutionizing the way people work. We connect the world with talented verified freelancers faster than ever before to collaborate, and get work done in a safe and secure online environment.",
      image: "./rozgaar.svg",
    },
    {
      index: "4",
      name: "SAS Hyundai",
      url: "https://www.sashyundai.com",
      shortDesc:
        "Rozgaarindia.com is revolutionizing the way people work. We connect the world with talented verified freelancers faster than ever before to collaborate, and get work done in a safe and secure online environment.",
      image: "./sashyundai.svg",
    },
  ];
const getInitials = (name) => {
    const words = name.split(" ");
    if (words.length >= 2) {
      const firstName = words[0].charAt(0);
      const lastName = words[words.length - 1].charAt(0);
      return `${firstName}${lastName}`;
    } else if (words.length === 1) {
      return words[0].charAt(0);
    } else {
      return "";
    }
  };
  return (
    <section className="py-8 px-4 m-8 max-w-screen-xl mx-auto custom-pattern-background">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mx-auto text-center">
          <h2 className="sm:text-4xl text-2xl font-bold text-white underline underline-offset-3 decoration-8 decoration-amber-400">
            Live Projects
          </h2>
          <p className="mx-auto mt-4 sm:text-2xl text-xl leading-relaxed text-amber-400">
            "Over the course of the period beginning from 26th July, 2021 until the present, I have successfully completed several projects. These projects showcase my expertise and dedication. Moreover, alongside these significant endeavors, I have also worked on numerous smaller projects, further honing both my skills and knowledge."
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {projectNames.map((item) => (
            <div key={item.index} className="border rounded-lg shadow-sm bg-white">
              <div className="relative">
               
                <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-amber-400 w-10 h-10 rounded-full flex items-center justify-center shadow">
                  <div className="w-10 h-10 object-cover rounded-full flex items-center justify-center">
                    {getInitials(item.name)}
                  </div>
              
                 
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-black">
                  {item.name}
                </h3>
                <p className="mt-2 text-black">{item.shortDesc}</p>
                <a
                  href={item.url}
                  rel="noopener noreferrer"
                  target="_blank"
                  className=" mt-4 text-sm font-medium text-amber-600 hover:text-amber-800"
                >
                  Visit Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
