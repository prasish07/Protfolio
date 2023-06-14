import React, { useEffect, useState } from "react";
import styles, { layout } from "../style";
import { prasish } from "../assets";
import Button from "./Button";
import CardLayout from "./CardLayout";
import { projects } from "../constants";
import { Tab, Tabs, useMediaQuery } from "@mui/material";
import "./loading.css";

const Project = () => {
  const [modifiedProject, setModifiedProject] = useState(null);
  const [value, setValue] = useState("Node");
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    const item = projects.filter((project) => project.category === value);
    setModifiedProject(item);
  }, [value]);
  return modifiedProject === null ? (
    <div className="lds-dual-ring relative left-[50%]"></div>
  ) : (
    <section className={`flex flex-col mt-6 items-center`}>
      <h2
        className={`font-poppins font-semibold text-[24px] text-blue-600 border-b-2`}
      >
        Projects
      </h2>
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: isNonMobile ? "block" : "none" } }}
        sx={{
          m: "25px",
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
          },
        }}
      >
        <Tab label="React.js" value="React" />
        <Tab label="Node.js" value="Node" />
      </Tabs>
      {modifiedProject.map((project, index) => {
        return <CardLayout key={project.id} {...project} index />;
      })}
    </section>
  );
};

export default Project;
