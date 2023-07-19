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
            <h4>ЖАНРЫ</h4>
            <ul className="list-unstyled">
              <li>Аниме</li>
              <li>Детский</li>
              <li>Комедия</li>
              <li>Мультфильм</li>
              <li>Фэнтези</li>
              <li>Боевик</li>
              <li>Мелодрама</li>
            </ul>
          </div>
          <div className="col">
            <h4>СТРАНЫ</h4>
            <ul className="list-unstyled">
              <li>Россия</li>
              <li>США</li>
              <li>Турция</li>
              <li>Франция</li>
              <li>Германия</li>
              <li>Южная Корея</li>
              <li>Италия</li>
            </ul>
          </div>
          <div className="col">
            <h4>КОНТАКТЫ</h4>
            <ul className="list-unstyled">
              <li>
                <Link to="https://ru-ru.facebook.com/">
                  <BsFacebook />
                  Facebook
                </Link>
              </li>
              <li>
                <Link to="https://www.instagram.com/">
                  <FaInstagramSquare />
                  Instagram
                </Link>
              </li>
              <li>
                <Link>
                  <AiFillTwitterCircle />
                  Twitter
                </Link>
              </li>
              <li>
                <Link>
                  <SiGithub />
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
