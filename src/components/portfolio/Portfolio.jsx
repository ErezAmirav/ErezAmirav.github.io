import React from 'react';
import './portfolio.css';
import myWiki from '../../assets/imgs/mywiki.png';
import EC from '../../assets/imgs/ecommerce.png';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={EC} alt="" />
          </div>
          <h3>ECommerce Shoes Store</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/ErezAmirav/ECommerce"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://erezamirav.github.io/ecommerce/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={myWiki} alt="" />
          </div>
          <h3>MyWiki - MediaApi (Wikipedia's API)</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/ErezAmirav/MyWiki"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://erezamirav.github.io/mywiki/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
