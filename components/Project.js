import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/Project.module.css";
// import { projectList } from "../data/projectData";
import { db } from "../firebase";
import { collection, query, getDocs } from "firebase/firestore";
const Project = () => {
  const [projectDisplayed, setProjectDisplayed] = useState(null);
  const [projectList, setProjectList] = useState([]);

  const selectProject = (index) => {
    setProjectDisplayed((projectDisplayed) => projectList[index]);
  };

  const retrieveData = async (collectionName) => {
    let data_arr = [];
    const q = query(collection(db, collectionName));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      data_arr.push(doc.data());
    });
    setProjectList((projectList) => data_arr);
  };

  useEffect(() => {
    retrieveData("projects");
  }, []);
  return (
    <div className={styles.projectDiv} id="projects" data-aos="fade-up">
      <div className={styles.projectButtonDiv}>
        {projectList.map((item, index) => (
          <button
            key={index}
            onClick={() => selectProject(index)}
            className={styles.projectButton}
          >
            {item.name}
          </button>
        ))}
      </div>
      {projectDisplayed ? (
        <div className={styles.projectDetailDiv}>
          <h1 className={styles.detailTitle}>{projectDisplayed.name}</h1>

          <p className={styles.detailDesc}>{projectDisplayed.desc}</p>

          <div className={styles.detailProjectButton}>
            <Link href={projectDisplayed.githubLink}>
              <button className={styles.projectLinkButton}>
                {projectDisplayed.githubLink}
              </button>
            </Link>
            <Link href={projectDisplayed.projectLink}>
              <button className={styles.githubLinkButton}>
                {projectDisplayed.projectLink}
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className={styles.projectDetailDiv}>
          <h1 className={styles.noProjectTitle}>Select a project</h1>
        </div>
      )}
    </div>
  );
};

export default Project;
