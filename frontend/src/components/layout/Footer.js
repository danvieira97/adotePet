import styles from "./css/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        <span className="bold">Adote um Pet</span> &copy; 2023
      </p>
    </footer>
  );
}

export default Footer;
