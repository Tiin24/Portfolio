import React from "react";
import { skills } from "../utils/projects";


const Skills = () => {
  return (
    <section className="bg-tertiary">
      <div className="container mx-auto items-center">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-6">
          {skills.map((skill, index) => {
            return (
              <div className="flex items-center justify-center" key={index}>
                <img className="w-20 " src={skill.img} alt=""/>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
