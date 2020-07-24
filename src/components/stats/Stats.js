import React from "react";
//import PropTypes from "prop-types";
import styles from "./stats.module.css";

// const findOnlineNum = () => {
//   return Math.floor(Math.random() * 300);
// };

// const findLastsNum = () => {
//   return Math.floor(Math.random() * 10);
// };

const Stats = () => (
  <div className={styles.main_stats}>
    <div className={styles.main_stats_online}>
      <div className={styles.main_stats_online_num} id="online_num">
        123
      </div>
      <div className={styles.main_stats_online_text}>
        <span>Смотрят</span>страницу
      </div>
    </div>
    <div className={styles.main_stats_lasts}>
      <div className={styles.main_stats_lasts_num}>5</div>
      <div className={styles.main_stats_lasts_text}>
        осталось<span>мест</span>
      </div>
    </div>
  </div>
);

//Stats.propTypes = {};

export default Stats;
