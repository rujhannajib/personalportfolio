import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.aboutContainer} id="about" data-aos="fade-up">
      <h1 className={styles.aboutDesc}>
        Hello, my name is Rujhan and I am a self-taught programmer enrolled in a
        pre-university program. I enjoy programming because it allows me to
        create something useful out of nothing. Please visit my personal
        websites to learn more about me.
      </h1>
      <div className={styles.imageDivDisc}>
        <img
          src="profile-picture.png"
          width={323}
          height={323}
          alt="Rujhan's picture"
        />
      </div>
    </div>
  );
};

export default About;
