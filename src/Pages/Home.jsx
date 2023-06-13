import React from "react";
import Hero from "../components/Hero";
import Project from "../components/Project";
import styles from "../style";

const Home = () => {
  return (
    <>
      <div className={`${styles.flexStart} ${styles.paddingX}`}>
        <div className={styles.boxWidth}>
          <Hero />
        </div>
      </div>
      <div className={`${styles.flexStart} ${styles.paddingX}`}>
        <div className={styles.boxWidth}>
          <Project />
        </div>
      </div>
    </>
  );
};

export default Home;
