import React from "react";
import styles from "./maker.module.css";

const Maker = (props) => {
  return (
    <section>
      <section className={styles.header}>
        <button className={styles.logout_button}>Logout</button>
        <span className={styles.title}>Header</span>
        <button className={styles.add_button}>Add</button>
      </section>

      <footer className={styles.footer}>Footer</footer>
    </section>
  );
};

export default Maker;
