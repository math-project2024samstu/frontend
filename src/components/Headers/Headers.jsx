import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>MathConf</h1>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/">Главная</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/olympiads">Олимпиады</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/conferences">Конференции</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/seminars">Семинары</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
