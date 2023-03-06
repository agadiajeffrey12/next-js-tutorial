import styles from "../styles/SideMenu.module.css";

export default function SideMenu({ quad, normal }) {
  return (
    <div className={styles.menu}>
      <div
        className={styles.menuDiv}
        onClick={() => {
          quad(true);
          normal(false);
        }}
      >
        Quadratic equations
      </div>
      <div className={styles.menuDiv}>Simultaneous equations</div>
      <div className={styles.menuDiv}>Partial Fractions</div>
      <div className={styles.menuDiv}></div>
    </div>
  );
}
