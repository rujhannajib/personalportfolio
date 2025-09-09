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
      <h1 className={styles.maintitle}>Rujhan Najib</h1>
      <p className={styles.mainslogan}>CS + Math @ PSU | Former Intern @ MARA, NUS, Nittany AI Advance</p>
      <div className={styles.bubblediv}>
        <Link
          href="Resume_2025.pdf"
          download="Resume_2025.pdf"
        >
          <div className={styles.bubble}>Download Resume </div>
        </Link>
      </div>
      <div className={styles.contactdiv}>
        <h1 className={styles.contacttitle}>Connect with me!</h1>
        <ul className={styles.contactlist}>
          <li className={styles.contactchild}>
            <a 
              href="https://www.linkedin.com/in/rujhan-najib" 
              target="_blank" 
              rel="noopener noreferrer"
            >
            <FontAwesomeIcon icon={faLinkedin} style={{ color: "white" }} />
            </a>
          </li>
          <li className={styles.contactchild}>
            <a 
              href="https://github.com/rujhannajib" 
              target="_blank" 
              rel="noopener noreferrer"
            >
            <FontAwesomeIcon icon={faGithub} style={{ color: "white" }} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainBanner;
