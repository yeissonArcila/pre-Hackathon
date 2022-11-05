import React from "react";
import "./header.css";
import "../assets/logo.png";
import { BsFillPersonFill } from "react-icons/bs";

const Header = () => {
  return (
    <div id="inicio">
      <section>
        <div className="contenido">
          <header>
            <div className="contenido-header">
              <h1>/SONBATA/</h1>
              <nav id="nav">
                <ul id="links">
                  <li className="secciones">
                    <a href="#inicio">Home</a>
                  </li>
                  <li className="secciones">
                    <a href="#usuario">Users</a>
                  </li>
                  <li className="secciones">
                    <a href="#articulos">Articles</a>
                  </li>
                  <li className="secciones">
                    <a href="#noticias">News</a>
                  </li>
                </ul>
              </nav>
              <div className="icono-usuario">
                <BsFillPersonFill  className="icono"/>
              </div>
            </div>
          </header>
        </div>
      </section>
    </div>
  );
};

export default Header;
