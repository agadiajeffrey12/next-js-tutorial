import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerSections}>
        <h1 className={styles.logo}>Calcul-X</h1>
      </div>
      <div className={styles.headerSections}>
        <button className={styles.break}>Take a break</button>
      </div>
    </header>
  );
}
