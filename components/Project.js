import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/Project.module.css";
// import { projectList } from "../data/projectData";
import { db } from "../firebase";
import { collection, query, getDocs } from "firebase/firestore";
import { NavItem } from "react-bootstrap";
const Project = () => {
  const [projectDisplayed, setProjectDisplayed] = useState(null);
  const [projectList, setProjectList] = useState([
    {title:"Personal Portfolio", desc:"My official personal portfolio", links:[{label:"Github", link:"https://github.com/rujhannajib/personalportfolio"}, {label:"Live View", link:"https://rujhannajib.vercel.app/"}]},
    {title:"Feature Engineering Research", desc:"Symbolic Feature Engineering Using Spearman-Guided Construction and Mutual Information-Based Selection for Classification Tasks", links:[{label:"View Paper", link:"https://www.overleaf.com/read/yqbxkvswrbvs#50ef98"}]}
  ]);

  // const selectProject = (index) => {
  //   setProjectDisplayed((projectDisplayed) => projectList[index]);
  // };

  // const retrieveData = async (collectionName) => {
  //   let data_arr = [];
  //   const q = query(collection(db, collectionName));
  //   const querySnapshot = await getDocs(q);
  //   querySnapshot.forEach((doc) => {
  //     data_arr.push(doc.data());
  //   });
  //   setProjectList((projectList) => data_arr);
  // };

  // useEffect(() => {
  //   retrieveData("projects");
  // }, []);
  return (
    <div className={styles.projectDiv} id="projects" data-aos="fade-up">
      <h2 className={styles.projectTitle}>Projects</h2>
      {projectList.map((item, index) => (
        <div key={index} className={styles.projectBox}>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
          {item.links && item.links.map((i, index) => (
            <Link href={i.link} key={index}>
            <button className={styles.projectButton}>
              {i.label}
            </button>
      </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Project;
