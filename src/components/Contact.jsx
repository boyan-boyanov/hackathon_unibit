import React from "react";

const Contact = () => {
  return (
    <>
      <section id="contact">
        <div className="tm-section-wrap">
          <img className="tm-parallax" src="/assets/img/img-04.jpg"></img>
          <div id="contact" className="tm-section">
            <h2 className="tm-text-primary">Contact Upright</h2>
            <hr className="mb-5" />
            <div className="row">
              <div className="col-xl-6 tm-contact-col-l mb-4">
                <form
                  id="contact-form"
                  action=""
                  method="POST"
                  className="tm-contact-form"
                >
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control rounded-0"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control rounded-0"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <select
                      className="form-control"
                      id="contact-select"
                      name="inquiry"
                    >
                      <option value="-">Subject</option>
                      <option value="sales">Sales &amp; Marketing</option>
                      <option value="creative">Creative Design</option>
                      <option value="uiux">UI / UX</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <textarea
                      rows="8"
                      name="message"
                      className="form-control rounded-0"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <div className="form-group tm-text-right">
                    <button type="submit" className="btn btn-primary">
                      Send
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-xl-6 tm-contact-col-r">
                <div className="mapouter mb-4">
                  <div className="gmap_canvas">
                    <iframe
                      width="100%"
                      height="520"
                      id="gmap_canvas"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.1709793326436!2d23.38513127700927!3d42.657732016242186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa868a6c82fc05%3A0xed9dd2cc56a95d15!2z0KPQvdC40LLQtdGA0YHQuNGC0LXRgiDQv9C-INCx0LjQsdC70LjQvtGC0LXQutC-0LfQvdCw0L3QuNC1INC4INC40L3RhNC-0YDQvNCw0YbQuNC-0L3QvdC4INGC0LXRhdC90L7Qu9C-0LPQuNC4IC0g0KPQvdC40JHQmNCiLTE!5e0!3m2!1sbg!2sbg!4v1732357859874!5m2!1sbg!2sbg"
                      frameBorder="0"
                    ></iframe>
                  </div>
                </div>

                <address className="mb-4">
                  бул.Цариградско шосе 119
                  <br />
                  Младост 1
                  <br />
                  1784 София
                </address>

                <ul className="tm-contact-links mb-4">
                  <li className="mb-2">
                    <a href="tel:0100200340">
                      <i className="fas fa-phone mr-2 tm-contact-link-icon"></i>
                      Tel: 088-000-0000
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@company.com">
                      <i className="fas fa-at mr-2 tm-contact-link-icon"></i>
                      Email: ourPageName@company.com
                    </a>
                  </li>
                </ul>
                <ul className="tm-contact-social">
                  <li>
                    <a
                      href="https://fb.com/templatemo"
                      className="tm-social-link"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com" className="tm-social-link">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com" className="tm-social-link">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://youtube.com" className="tm-social-link">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
