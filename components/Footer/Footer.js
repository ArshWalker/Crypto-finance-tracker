
import styles from "./Footer.module.css";
function Footer() {
  const currentyear = new Date().getFullYear();
  return (
    <footer>
      <div className={styles.cont}>
        <p className={styles.pos}>
          {" "}
          | Made with ❤️ by{" "}
          <a href="https://github.com/ArshWalker">Arshdeep.</a> | ©{" "}
          {currentyear}
        </p>
      </div>
    </footer>
  );
}

export default Footer;