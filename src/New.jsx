import React from "react";
import Navbar from "./components/Navbar";
import styles from "./style";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={styles.boxWidth}>
          <Navbar />
        </div>
      </div>
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
      <div className={`${styles.flexStart} bg-gray-600 ${styles.paddingX}`}>
        <div className={styles.boxWidth}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
