import React from "react";
//import PropTypes from "prop-types";
import styles from "./footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footer_container}>
      <ul className={styles.footer_list}>
        <li>
          <a href="https://obsachfebeadelo.ru/policy.html">
            Политика конфиденциальности
          </a>
        </li>
        <li>
          <a href="https://obsachfebeadelo.ru/agreement.html">
            Пользовательское соглашение
          </a>
        </li>
      </ul>
      <div className={styles.footer_copyright}>
        Copyright © 2020 – Общее дело
      </div>
    </div>
  </footer>
);

//Footer.propTypes = {};

export default Footer;
