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
            <ul
              className={`${styles.navMenu} ${isActive ? styles.active : ""}`}
            >
              <li onClick={removeActive}>
                <Link to={"/"} className={`${styles.navLink}`}>
                  Home
                </Link>
              </li>

              <li onClick={removeActive}>
                <Link to={"/Contacts"} className={`${styles.navLink}`}>
                  Contacts
                </Link>
              </li>
            </ul>

            <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleIsActive}>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
          </nav>
        </header>
      </div>
    </>
  );
};

