import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import styles from "./style";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Error from "./Pages/Error";

const App = () => {
  return (
    <BrowserRouter>
      <div className="w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={styles.boxWidth}>
            <Navbar />
          </div>
        </div>
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <div className={`${styles.flexStart} bg-gray-600 ${styles.paddingX}`}>
          <div className={styles.boxWidth}>
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
