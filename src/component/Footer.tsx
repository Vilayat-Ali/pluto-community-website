import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Footer() {
  const [email, setEmail] = useState("");

  function inputHandler(e: any) {
    setEmail((email) => e.target.value);
  }

  async function subscribeClient() {
    await axios
      .post(`${process.env.REACT_APP_BASE_URL!}client/newsletter/`, {
        email: email,
      })
      .then((res: any) => {
        if (res.data.status === "success") {
          alert("Email Subscribed!");
        } else {
          alert("Email already subscribed!");
        }
      })
      .catch((err: any) => {
        console.log(err.message);
      });
  }

  function Subscribe() {
    if (email === "") {
      alert("Enter a valid email");
    } else {
      subscribeClient();
    }
  }

  return (
    <>
      <footer id="footer" className="footer">
        <div className="footer-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer-info">
                  <h3>Pluto</h3>
                  <p>
                    We are a passionate group of techies who have come toegther
                    to form a community that aims at solving the Important
                    problems in this world.
                  </p>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <Link to="/">
                      <i className="bi bi-chevron-right"></i>{" "}
                      <a href="/">Home</a>
                    </Link>
                  </li>

                  <li>
                    <Link to="/projects">
                      <i className="bi bi-chevron-right"></i>{" "}
                      <a href="/projects">Projects</a>
                    </Link>
                  </li>

                  <li>
                    <Link to="/team">
                      <i className="bi bi-chevron-right"></i>{" "}
                      <a href="/team">Team</a>
                    </Link>
                  </li>

                  <li>
                    <Link to="/news">
                      <i className="bi bi-chevron-right"></i>{" "}
                      <a href="/news">News</a>
                    </Link>
                  </li>

                  <li>
                    <Link to="/Join">
                      <i className="bi bi-chevron-right"></i>{" "}
                      <a href="/join">Join</a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Community</h4>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <a href="https://discord.gg/eNkJWvGCfp">Discord</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <a href="/">Github</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i> <a href="/">AWS</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <a href="/">Gitlab</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Our Newsletter</h4>
                <p>
                  Stay up-to-date with our community by signing up for the
                  official newsletter for free.
                </p>
                <form>
                  <input
                    type="email"
                    name="email"
                    onChange={inputHandler}
                    placeholder="Enter your email"
                  />
                  <input
                    type="button"
                    className="subscribe-btn"
                    onClick={Subscribe}
                    value="Subscribe"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-legal text-center">
          <div className="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">
            <div className="d-flex flex-column align-items-center align-items-lg-start">
              <div className="copyright">
                &copy; Copyright{" "}
                <strong>
                  <span>Pluto</span>
                </strong>{" "}
                logo. All Rights Reserved. Teamplate by{" "}
                <a href="https://bootstrapmade.com">bootstrapmade.com</a>
              </div>
            </div>

            <div className="social-links order-first order-lg-last mb-3 mb-lg-0">
              <a href="/" className="twitter">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="/" className="facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="/" className="instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="/" className="google-plus">
                <i className="bi bi-skype"></i>
              </a>
              <a href="/" className="linkedin">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
