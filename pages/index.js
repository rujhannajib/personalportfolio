import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Comment from "../components/Comment";
import MainBanner from "../components/MainBanner";
import Project from "../components/Project";
import Skills from "../components/Skills";
import styles from "../styles/Home.module.css";
import Highlights from "../components/Highlights";

export default function Home() {
  return (
    <div className={styles.content}>
      <MainBanner />
      <About />
      <Highlights />
      <Skills />
      <Project />
      <Comment />
    </div>
  );
}
