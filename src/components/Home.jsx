import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Home = () => {
  return (
    <>
      <div className="tm-section-wrap">
        <img className="tm-parallax" src="/assets/img/homeparalax.png"></img>
        <section id="home" className="tm-section">
          <h2 className="tm-text-primary">Добре дошли в Здраво Земя</h2>
          <hr className="mb-5" />
          <div className="row">
            <div className="col-lg-6 tm-col-home mb-4">
              <div className="tm-text-container">
                <div className="tm-icon-container mb-5 mr-0 ml-auto">
                  <i
                    className="fa-solid fa-earth-europe fa-4x tm-text-primary"
                    style={{ color: "#63E6BE" }}
                  ></i>
                </div>
                <p>
                  Добре дошли в Здраво Земя – твоят свят на забавление, здраве и
                  приключения! Тук героите оживяват, а планетата става
                  по-красива с всяка твоя здравословна стъпка. Присъедини се към
                  нас и открий как можеш да промениш своя свят с полезни навици!
                </p>
              </div>
            </div>
            <div className="col-lg-6 tm-col-home mb-4">
              <div className="tm-text-container">
                <div className="tm-icon-container mb-5 mr-0 ml-auto">
                  <i
                    className="fa-solid fa-people-group fa-4x tm-text-primary"
                    style={{ color: "#FFD43B" }}
                  ></i>
                </div>
                <p>
                  Здраво Земя е по-забавна с приятели! Създайте отбори,
                  изпълнявайте мисии заедно и се състезавайте в класации.
                  Споделете своите приключения и помогнете на вашата планета да
                  расте здрава и красива!
                </p>
                <div className="text-right">
                  <a href="#gallery" className="btn btn-primary tm-btn-next">
                    Играй
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr className="tm-hr-short mb-5" />
          <div className="row tm-row-home">
            <div className="tm-col-home tm-col-home-l">
              <div className="media mb-4">
                <i className="fas fa-scroll fa-4x tm-post-icon tm-text-primary"></i>
                <div className="media-body">
                  <a
                    href="#"
                    className="d-block mb-2 tm-text-primary tm-post-link"
                  >
                    Мисии
                  </a>
                  <p>
                    Открий ежедневни мисии и предизвикателства за здравословен
                    начин на живот. Изпълнявай задачи, събирай точки и създай
                    своето по-добро Аз!
                  </p>
                </div>
              </div>
              <div className="media mb-4">
                <i className="fas fa-cloud-sun fa-4x tm-post-icon tm-text-primary"></i>
                <div className="media-body">
                  <a
                    href="#"
                    className="d-block mb-2 tm-text-primary tm-post-link"
                  >
                    Игра
                  </a>
                  <p>
                    Играй и учи чрез забавни мини-игри! Тичай, скачай и
                    танцувай, докато опознаваш магическия свят на ЗдравоЗемя.
                  </p>
                </div>
              </div>
              <div className="media mb-4">
                <i className="fas fa-dove fa-4x tm-post-icon tm-text-primary"></i>
                <div className="media-body">
                  <a
                    href="#"
                    className="d-block mb-2 tm-text-primary tm-post-link"
                  >
                    Образование
                  </a>
                  <p>
                    Научи защо здравословните навици са важни за теб! Открий
                    образователни клипчета и забавни съвети, които ще ти
                    помогнат да растеш силен и здрав.
                  </p>
                </div>
              </div>
            </div>
            <div className="tm-col-home mr-0 ml-auto">
              <div className="tm-img-home-container"></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
