import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navigation.module.css";

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleIsActive = () => {
    setIsActive(!isActive);
  };
  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <nav className={`${styles.navbar}`}>
            <Link to={"/"} className="Logo">
              Pine N.
            </Link>
            <div className={styles.navRight}>


              <ul
                className={`${styles.navMenu} ${isActive ? styles.active : ""}`}
              >
                <li>
                  <a className={`${styles.navLink}`} href="#projects">projects.</a>
                </li>


                <li>
                  <a className={`${styles.navLink}`} href="#experience">experience.</a>
                </li>


                <li>
                  <a className={`${styles.navLink}`} href="#skills">skills.</a>
                </li>

                <li>
                  <a className={`${styles.navLink}`} href="#about">about.</a>
                </li>
              </ul>

              <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`} onClick={toggleIsActive}>
                <span className={`${styles.bar}`}></span>
                <span className={`${styles.bar}`}></span>
                <span className={`${styles.bar}`}></span>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

