import React from "react";

const SocialShareWeb = () => {
  const phoneNumber = "8968966638";
  const linkedinURL = "https://www.linkedin.com/in/shwetang-prajapati-81ab97157/";
  const githubURL = "https://github.com/shwetangprajapati";
  const email = "shwetangprajapati11@gmail.com";

  return (
    <nav>
      <ul>
        <li>
          <a href={`https://api.whatsapp.com/send?phone=${phoneNumber}`} aria-label="Contact me on whatsapp">
            <i className="fab fa-whatsapp hover:scale-110" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href={linkedinURL} aria-label="Contact me on linkedin">
            <i className="fab fa-linkedin-in hover:scale-110" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href={githubURL} aria-label="Contact me on github">
            <i className="fab fa-github hover:scale-110" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href={`mailto:${email}`} aria-label="Contact me on mail">
            <i className="fas fa-envelope hover:scale-110" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href={`tel:${phoneNumber}`} aria-label="Contact me on call">
            <i className="fas fa-phone hover:scale-110" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SocialShareWeb;
