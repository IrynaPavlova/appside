import React from "react";
//import PropTypes from "prop-types";
import styles from "./header.module.css";
import logo from "../../assets/icons/main-logo.png";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.header_logo}>
      <a href="#">
        <img src={logo} alt="Общее дело" />
      </a>
    </div>
    <h1 className={styles.header_title}>
      Торопись и проходи абсолютно бесплатную регистрацию и начни жить лучше уже
      сегодня!
    </h1>
  </header>
);

//Header.propTypes = {};

export default Header;
