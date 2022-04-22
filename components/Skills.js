import styles from "../styles/Skills.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNode,
  faPython,
  faReact,
  faSwift,
} from "@fortawesome/free-brands-svg-icons";
const Skills = () => {
  const icons = [
    { iconName: faReact, color: "rgba(57, 146, 195, 1)" },
    { iconName: faSwift, color: "rgba(238, 86, 86, 1)" },
    { iconName: faNode, color: "rgba(59, 165, 89, 1)" },
    { iconName: faPython, color: "rgba(255, 202, 40, 1)" },
  ];

  const icons2 = ["solidity.png", "figma.png", "firebase.png", "mongodb.png"];
  return (
    <div className={styles.skillsDiv} id="skills" data-aos="fade-up">
      <div className={styles.rowSkills}>
        {icons.map((item, index) => (
          <div className={styles.whiteBox} key={index}>
            <FontAwesomeIcon
              icon={item.iconName}
              style={{
                color: item.color,
                height: "134px",
                width: "134px",
              }}
            />
          </div>
        ))}

        {/* <div className={styles.whiteBox}></div>
        <div className={styles.whiteBox}></div>
        <div className={styles.whiteBox}></div> */}
      </div>
      <div className={styles.rowSkills}>
        {icons2.map((item, index) => (
          <div className={styles.whiteBox} key={index}>
            <img src={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
