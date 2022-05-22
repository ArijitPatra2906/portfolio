import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/1.jpeg";
import IMG2 from "../../assets/2.jpeg";
import IMG3 from "../../assets/3.jpeg";
import IMG4 from "../../assets/4.png";
import IMG5 from "../../assets/TICTACTOE.jpeg";
import IMG6 from "../../assets/moviedb.jpeg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent wrok</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-img">
            <img src={IMG3} alt="" />
            <h3>Crypto Coinex</h3>
            <div className="portfolio_item-cta">
              <a
                href="https://github.com/ArijitPatra2906/crypto-coinex"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href="https://cryptocoinex.netlify.app"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-img">
            <img src={IMG1} alt="" />
            <h3>Javascript Clock</h3>
            <div className="portfolio_item-cta">
              <a
                href="https://github.com/ArijitPatra2906/javascript-clock"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href="https://arijitpatra2906.github.io/javascript-clock/"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-img">
            <img src={IMG2} alt="" />
            <h3>TextConverter</h3>
            <div className="portfolio_item-cta">
              <a
                href="https://github.com/ArijitPatra2906/TextConverter"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href="https://arijitpatra2906.github.io/TextConverter/"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-img">
            <img src={IMG4} alt="" />
            <h3>Hover Board</h3>
            <div className="portfolio_item-cta">
              <a
                href="https://github.com/ArijitPatra2906/hover-board"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href="https://codepen.io/arijitpatracp/pen/XWMqgeY"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-img">
            <img src={IMG5} alt="" />
            <h3>TIC-TAC-TOE</h3>
            <div className="portfolio_item-cta">
              <a
                href="https://github.com/ArijitPatra2906/tic-tac-toe"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href="https://ar1-tictactoegame.netlify.app/"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-img">
            <img src={IMG6} alt="" />
            <h3>Movie Hub</h3>
            <div className="portfolio_item-cta">
              <a
                href="https://github.com/ArijitPatra2906/moviedbclone"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href="https://moviedb-entertainment-hub.netlify.app"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
