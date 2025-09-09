import styles from "../styles/About.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.aboutContainer} id="about" data-aos="fade-up">
      <h1 className={styles.aboutDesc}>
        Hi, I’m Rujhan, a senior at Penn State. Welcome to the refreshed version of my portfolio. 
        A lot has changed recently, but my passion for leveraging technology to build a better future remains as strong as ever. 
        Here, you’ll find my past achievements, future aspirations, and a rare glimpse into my life.
      </h1>
      <div className={styles.imageDivDisc}>
        <Image
          src="/profile-picture.png"
          width={323}
          height={323}
          alt="Rujhan's picture"
        />
      </div>
    </div>
  );
};

export default About;
