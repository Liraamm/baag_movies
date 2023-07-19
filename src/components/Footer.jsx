import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>GENRE</h4>
            <ul className="list-unstyled">
              <li>Anime</li>
              <li>For kids</li>
              <li>Comedy</li>
              <li>Cartoons</li>
              <li>Sci-fi</li>
              <li>Action</li>
              <li>Drama</li>
            </ul>
          </div>
          <div className="col">
            <h4>COUNTRIES</h4>
            <ul className="list-unstyled">
              <li>Russia</li>
              <li>USA</li>
              <li>Turkey</li>
              <li>France</li>
              <li>Germany</li>
              <li>South Korea</li>
              <li>Italy</li>
            </ul>
          </div>
          <div className="col">
            <h4>CONTACTS</h4>
            <ul className="list-unstyled">
              <li>
                <Link target="_blank" to="https://ru-ru.facebook.com/">
                  <BsFacebook style={{ marginRight: "10px" }} />
                  Facebook
                </Link>
              </li>
              <li>
                <Link target="_blank" to="https://www.instagram.com/">
                  <FaInstagramSquare style={{ marginRight: "10px" }} />
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  to="https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flang%3Dru"
                >
                  <AiFillTwitterCircle style={{ marginRight: "10px" }} />
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  to="https://github.com/Liraamm/baag_movies"
                >
                  <SiGithub style={{ marginRight: "10px" }} />
                  Github
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm"></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
