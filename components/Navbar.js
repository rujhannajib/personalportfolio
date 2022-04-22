import { useContext, useEffect } from "react";
import styles from "../styles/Navbar.module.css";
import { AppContext } from "../Context";
import Link from "next/link";
const Navbar = () => {
  const { menuOpen, setMenuOpen } = useContext(AppContext);
  const openMenu = () => {
    setMenuOpen((menuOpen) => !menuOpen);
    console.log(menuOpen);
  };
  const openCloseNav = () => {
    setMenuOpen((menuOpen) => !menuOpen);
  };
  return (
    <>
      <div className={styles.navbarcontainer}>
        <div className={styles.navbargroup} onClick={openMenu}>
          <div className={styles.whitebar}></div>
          <div className={styles.whitebar}></div>
          <div className={styles.whitebar}></div>
        </div>
      </div>
      {/* {menuOpen && (
        <div className={styles.topNav} onClick={openCloseNav}>
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
          </ul>
        </div>
      )} */}
    </>
  );
};

export default Navbar;
