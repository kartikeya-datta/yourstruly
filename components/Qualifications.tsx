"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-4 text-center">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
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
      <ul className="list-disc pl-4 text-center">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
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
