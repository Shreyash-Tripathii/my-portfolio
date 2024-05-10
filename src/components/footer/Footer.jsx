import React from "react";
import "./footer.css";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        SHREYASH
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#myprojects">My Projects</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/shreyash-tripathi-1569a2274/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/Shreyash-Tripathii">
          <BsGithub />
        </a>
        <a href="https://www.instagram.com/shreyashtripathi49">
          <BsInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Shreyash Tripathi. All rightts reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
