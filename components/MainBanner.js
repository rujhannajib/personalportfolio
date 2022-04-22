import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/MainBanner.module.css";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const MainBanner = () => {
  return (
    <div className={styles.mainbannerdiv}>
      <h1 className={styles.maintitle}>JanjibDEV</h1>
      <p className={styles.mainslogan}>Developer | Designer | Student</p>
      <div className={styles.bubblediv}>
        <Link
          href="Rujhan Najib's Resume.pdf"
          download="Rujhan Najib's Resume.pdf"
        >
          <div className={styles.bubble}>Download Resume </div>
        </Link>
      </div>
      <div className={styles.contactdiv}>
        <h1 className={styles.contacttitle}>Connect with me!</h1>
        <ul className={styles.contactlist}>
          <li className={styles.contactchild}>
            <FontAwesomeIcon icon={faLinkedin} style={{ color: "white" }} />
          </li>
          <li className={styles.contactchild}>
            <FontAwesomeIcon icon={faGithub} style={{ color: "white" }} />
          </li>
          <li className={styles.contactchild}>
            <FontAwesomeIcon icon={faInstagram} style={{ color: "white" }} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainBanner;
