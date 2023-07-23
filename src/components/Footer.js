import React from "react";

const Footer = () => {

   const phoneNumber = "8968966638";
  const linkedinURL = "https://www.linkedin.com/in/shwetang-prajapati-81ab97157/";
  const githubURL = "https://github.com/shwetangprajapati";
  const email = "shwetangprajapati11@gmail.com";
  const socialData = [
    {
      index: "0",
      url: linkedinURL,
      icon: "./linkedin.png",
      title: "Linkedin Shwetang",
    },
    
    {
      index: "1",
      url: githubURL,
      icon: "./github.png",
      title: "Github Shwetang",
    },
        {
      index: "2",
      url: `https://api.whatsapp.com/send?phone=${phoneNumber}`,
      icon: "./whatsappicon.png",
      title: "WhatsApp Shwetang",
    },
        {
      index: "3",
      url: `tel:${phoneNumber}`,
      icon: "./callicon.png",
      title: "Call Shwetang",
    },
        {
      index: "4",
      url: `mailto:${email}`,
      icon: "./mailicon.png",
      title: "Mail Shwetang",
    },
  ];

  return (
    <section className="py-4 custom-radial-gradient">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center xl:flex xl:items-center xl:justify-between xl:text-left">
          <div className="xl:flex xl:items-center xl:justify-start">
            <p className="mt-5 text-sm text-black xl:ml-6 xl:mt-0">
              © Copyright 2023 Shwetang Prajapati
            </p>
          </div>

          <div className="items-center mt-8 xl:mt-0 xl:flex xl:justify-end xl:space-x-8">
            <ul className="flex items-center justify-center space-x-8 xl:justify-end">
              {socialData?.map((item) => {
                return (
                  <li key={item.index}>
                    <a
                      href={item.url}
                      target="_blank"
                      title={item.title}
                                    rel="noopener noreferrer"

                      className="block text-black transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                    >
                                          <img src={item.icon} alt={item.title} className="w-6 h-6 hover:scale-110" />

                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
