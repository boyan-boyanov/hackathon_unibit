import React, { useState, useEffect } from "react";

const Header = () => {
  const [currentTab, setCurrentTab] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(`Visible: ${entry.target.id}`);
          setCurrentTab(entry.target.id);
        }
      });
    }, options);

    // Observe each section
    sections.forEach((section) => observer.observe(section));

    // Cleanup observer on unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div id="tm-sidebar" className="tm-sidebar">
        <nav className="tm-nav">
          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div>
            <div className="tm-brand-box">
              <h1 className="tm-brand">ЗдравоЗемя</h1>
            </div>
            <ul id="tm-main-nav">
              <li className="nav-item" onClick={() => setCurrentTab("home")}>
                <a
                  href="#home"
                  className={
                    "nav-link " + (currentTab === "home" ? "current" : "")
                  }
                >
                  <div className="triangle-right"></div>
                  <i className="fas fa-home nav-icon"></i>
                  Начало
                </a>
              </li>
              <li className="nav-item" onClick={() => setCurrentTab("gallery")}>
                <a
                  href="#gallery"
                  className={
                    "nav-link " + (currentTab === "gallery" ? "current" : "")
                  }
                >
                  <div className="triangle-right"></div>
                  <i className="fas fa-images nav-icon"></i>
                  Играй
                </a>
              </li>
              <li className="nav-item" onClick={() => setCurrentTab("about")}>
                <a
                  href="#about"
                  className={
                    "nav-link " + (currentTab === "about" ? "current" : "")
                  }
                >
                  <div className="triangle-right"></div>
                  <i className="fas fa-user-friends nav-icon"></i>
                  За нас
                </a>
              </li>
              <li className="nav-item" onClick={() => setCurrentTab("contact")}>
                <a
                  href="#contact"
                  className={
                    "nav-link " + (currentTab === "contact" ? "current" : "")
                  }
                >
                  <div className="triangle-right"></div>
                  <i className="fas fa-envelope nav-icon"></i>
                  Контакти
                </a>
              </li>
            </ul>
          </div>
          <footer className="mb-3 tm-mt-100">
            Design:{" "}
            <a href="https://templatemo.com" target="_parent" rel="sponsored">
              TemplateMo
            </a>
          </footer>
        </nav>
      </div>
    </>
  );
};

export default Header;
