import styles from "../styles/Modal.module.css";
import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "../Context";
const Modal = () => {
  const { menuOpen, setMenuOpen } = useContext(AppContext);
  const openCloseNav = () => {
    setMenuOpen((menuOpen) => !menuOpen);
  };
  return (
    <div className={styles.menuModal} onClick={openCloseNav} data-aos="fade-up">
      <ul className={styles.menuGroup}>
        <Link href="#about">
          <li className={styles.menuItem}>About</li>
        </Link>
        <Link href="#skills">
          <li className={styles.menuItem}>Skills</li>
        </Link>
        <Link href="#projects">
          <li className={styles.menuItem}>Projects</li>
        </Link>
        <Link href="#comment">
          <li className={styles.menuItem}>Comments</li>
        </Link>
        <p className={styles.warning}>Click the modal to close the modal</p>
      </ul>
    </div>
  );
};

export default Modal;
