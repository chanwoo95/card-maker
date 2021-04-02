import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const history = useHistory();
  const goMaker = () => {
    history.push("/");
  };
  const onLogin = (event) => {
    authService.login(event.currentTarget.textContent);
  };
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>
      <section className={styles.content}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li className={styles.li}>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <div className={styles.footer}>
        <Footer />
      </div>
    </section>
  );
};

export default Login;
