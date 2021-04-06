import React from "react";
import styles from "./header.module.css";

const Header = ({ onLogout }) => {
  {
    onLogout && <button>Logout</button>;
  }

  return (
    <header className={styles.header}>
      <i className={`${styles.img} far fa-address-card`}></i>
      <h2 className={styles.title}>welcome to my first card-maker homepage</h2>
    </header>
  );
};

export default Header;
