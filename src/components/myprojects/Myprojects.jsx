import React from "react";
import "./myprojects.css";
import IMG1 from "../../assets/img5.jpg";
import IMG2 from "../../assets/img2.png";
import IMG4 from "../../assets/img4.png";

const Myprojects = () => {
  return (
    <section id="myprojects">
      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Simple Bank App</h3>
          <small className="text-light">HTML | CSS | Flask | MySQL</small>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Shreyash-Tripathii/bank"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>MERN Auth System</h3>
          <small className="text-light">
            ReactJS | Express | MongoDB | TailwindCSS
          </small>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Shreyash-Tripathii/auth-mern"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>My Portfolio(This website)</h3>
          <small className="text-light">ReactJs</small>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Shreyash-Tripathii/my-portfolio"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://github.com/Shreyash-Tripathii/my-portfolio"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Visit Website
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Myprojects;
