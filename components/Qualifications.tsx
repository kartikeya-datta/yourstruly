"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import SkillsGrid from "./skillgrid";


const TAB_DATA = [

  {
    title: "Skills",
    id: "skills",
    content: <SkillsGrid />,
  },
  {
    title: "Education",
    id: "education",
    content: (
<div className="flex flex-col gap-6">
  <a className="text-center space-y-2 group transition duration-300" 
     href="https://www.nwmissouri.edu/" target="_blank" rel="noopener noreferrer">
    <p className="text-2xl font-semibold text-white transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text">
      Masters in Applied computer science
    </p>
    <p className="text-xl text-gray-300 transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text">
      Northwest Missouri State University, Maryville MO
    </p>
  </a>
  <a className="text-center space-y-2 group transition duration-300" 
     href="https://www.gla.ac.in/" target="_blank" rel="noopener noreferrer">
    <p className="text-2xl font-semibold text-white transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text">
      Bachelors in Electrical engineer
    </p>
    <p className="text-xl text-gray-300 transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text">
      GLA University, Mathure, UP
    </p>
  </a>
  <a className="text-center space-y-2 group transition duration-300" 
      href="https://bgis.org/" target="_blank" rel="noopener noreferrer">
    <p className="text-2xl font-semibold text-white transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text">
      High school
    </p>
    <p className="text-xl text-gray-300 transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text">
      Bhaktivedanta gurukul and international school, Mathure, UP
    </p>
  </a>
</div>

    ),
  },
  {
  title: "Certifications",
  id: "certifications",
  content: (
    <div className="space-y-6">
  {/* Machine Learning */}
  <div className="text-center space-y-2 group transition duration-300">
    <a
      href="https://www.coursera.org/learn/machine-learning"
      target="_blank"
      rel="noopener noreferrer"
      className="text-2xl font-semibold text-white transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text"
    >
      Machine Learning,
    </a>
    <br />
    <a
      href="https://www.coursera.org/account/accomplishments/verify/VGQ91M4FKYNK"
      target="_blank"
      rel="noopener noreferrer"
      className="text-xl text-gray-300 transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text"
    >
      Supervised,
    </a>{" "}
    <a
      href="https://www.coursera.org/account/accomplishments/verify/XHZE71T2L3ET"
      target="_blank"
      rel="noopener noreferrer"
      className="text-xl text-gray-300 transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text"
    >
      Advanced Learning Algorithms,
    </a>{" "}
    <a
      href="https://www.coursera.org/account/accomplishments/verify/Y3JPA5Y2E2VB"
      target="_blank"
      rel="noopener noreferrer"
      className="text-xl text-gray-300 transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text"
    >
      Unsupervised
    </a>
  </div>

  {/* SQL */}
  <div className="text-center space-y-2 group transition duration-300">
    <a
      href="https://www.coursera.org/learn/intro-sql"
      target="_blank"
      rel="noopener noreferrer"
      className="text-2xl font-semibold text-white transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text"
    >
      Developing SQL Databases
    </a>
    <br />
    <p className="text-xl text-gray-300 transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text">
      Learn how to create, manage and query databases using SQL.
    </p>
  </div>

  {/* Python */}
  <div className="text-center space-y-2 group transition duration-300">
    <a
      href="https://www.coursera.org/specializations/python"
      target="_blank"
      rel="noopener noreferrer"
      className="text-2xl font-semibold text-white transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text"
    >
      Python Programming
    </a>
    <br />
    <p className="text-xl text-gray-300 transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text">
      Python Data Structures, Web Access, and Scripting
    </p>
  </div>
</div>

  ),
}

];

const Qualifications = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: React.SetStateAction<string>) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="Qualifications" className="text-white text-center">
      <div className="flex flex-col items-center py-8 px-4 sm:py-16 xl:px-16">
        {/* Centered Tab Buttons */}
        <div className="flex flex-row justify-center space-x-4">
          <TabButton
            selectTab={() => handleTabChange("education")}
            active={tab === "education"}
          >
            Education
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("skills")}
            active={tab === "skills"}
          >
            Skills
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("certifications")}
            active={tab === "certifications"}
          >
            Certifications
          </TabButton>
        </div>

        {/* Content Below */}
        <div className="mt-8">
          {isPending ? (
            <p className="text-gray-400 animate-pulse">Loading...</p>
          ) : (
            TAB_DATA.find((t) => t.id === tab)?.content || null
          )}
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
