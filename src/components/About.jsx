import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const About = () => {
  return (
    <>
      <div className="tm-section-wrap">
        <img className="tm-parallax" src="/assets/img/aboutparalax.png"></img>
        <section id="about" className="tm-section">
          <h2 className="tm-text-primary">За Нас</h2>
          <hr className="mb-5" />

          <div className="row tm-row-about">
            <div className="tm-col-about tm-col-about-l">
              <p className="mb-4">
                Добре дошли в ЗдравоЗемя! Ние сме екип, вдъхновен от идеята да
                превърнем здравословния начин на живот в забавно и вдъхновяващо
                приключение за деца.
              </p>
              <p className="mb-4">
                Нашата мисия е да помогнем на семействата да изградят полезни
                навици чрез игра, предизвикателства и интерактивни приключения.
                Съчетаваме образованието с игровизация, за да създадем свят, в
                който децата могат да учат, играят и развиват своята
                „ЗдравоЗемя“.
              </p>
            </div>
            <div className="tm-col-about tm-col-about-r">
              <img
                src="/assets/img/officework.png"
                alt="Image"
                className="img-fluid mb-5 tm-img-about"
              />
              <p>Иновации и движение – нашата формула за успех!</p>
            </div>
          </div>
          <div className="mt-5">
            <div className="tm-carousel">
              <div className="tm-carousel-item">
                <figure className="effect-honey mb-4">
                  <img src="/assets/img/bboyanov.jpg" alt="Featured Item" />
                  <figcaption>
                    <ul className="tm-social">
                      <li>
                        <a
                          href="https://facebook.com"
                          className="tm-social-link"
                        >
                          <i className="fab fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com"
                          className="tm-social-link"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://instagram.com"
                          className="tm-social-link"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </figcaption>
                </figure>
                <div className="tm-about-text">
                  <h3 className="mb-3 tm-text-primary tm-about-title">
                    Боян Боянов
                  </h3>
                  <p>
                    Боян има дългогодишен опит в създаването на детски
                    образователни програми и вярва, че всяко дете заслужава шанс
                    за здравословно бъдеще.
                  </p>
                  <h4 className="tm-text-secondary tm-about-subtitle">
                    Програмист
                  </h4>
                </div>
              </div>

              <div className="tm-carousel-item">
                <figure className="effect-honey mb-4">
                  <img src="/assets/img/izabel.jpg" alt="Featured Item" />
                  <figcaption>
                    <ul className="tm-social">
                      <li>
                        <a
                          href="https://facebook.com"
                          className="tm-social-link"
                        >
                          <i className="fab fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com"
                          className="tm-social-link"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://instagram.com"
                          className="tm-social-link"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </figcaption>
                </figure>
                <div className="tm-about-text">
                  <h3 className="mb-3 tm-text-primary tm-about-title">
                    Изабел Вълчева
                  </h3>
                  <p>
                    Изабел е вдъхновението зад нашите мисии. Със своето умение
                    да съчетава знание с игри, тя успява да ангажира и вдъхнови
                    децата всеки ден.
                  </p>
                  <h4 className="tm-text-secondary tm-about-subtitle">
                    Дизайнер
                  </h4>
                </div>
              </div>

              <div className="tm-carousel-item">
                <figure className="effect-honey mb-4">
                  <img src="/assets/img/banovski.jpg" alt="Featured Item" />
                  <figcaption>
                    <ul className="tm-social">
                      <li>
                        <a
                          href="https://facebook.com"
                          className="tm-social-link"
                        >
                          <i className="fab fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com"
                          className="tm-social-link"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://instagram.com"
                          className="tm-social-link"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </figcaption>
                </figure>
                <div className="tm-about-text">
                  <h3 className="mb-3 tm-text-primary tm-about-title">
                    Цветомир Бановски
                  </h3>
                  <p>
                    Цветомир е стражът на перфектното изпълнение. Той гарантира,
                    че всички наши игри и мисии, отговарят на стандартите за
                    качество.
                  </p>
                  <h4 className="tm-text-secondary tm-about-subtitle">
                    Осигуряване на Качество
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
