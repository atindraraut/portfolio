/*
   Copyright (C), 2023-2024, Atindra Raut
   Author: Sara Echeverria
   FileName: Skills.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import { m, LazyMotion, domAnimation } from "framer-motion";
import SectionTitle from "../Components/SectionTitle";
import { skills } from "../Constants/constants";

const Skills = () => {
  return (
    <div id="skills" className="w-full overflow-hidden-web flex justify-center">
      <div className="w-full flex flex-col xl:w-[70%] pb-16">
        <div className="w-full">
          <SectionTitle title="SKILLS & EXPERTISE" subtitle="Technologies I work with" />
        </div>
        
        {/* Modern Skills Grid */}
        <div className="mt-12">
          <LazyMotion features={domAnimation} strict>
            <m.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {skills.map((skill, index) => (
                <m.div
                  key={skill.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 10,
                    transition: { duration: 0.3 }
                  }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="group bg-gradient-to-br from-grayscale-900/70 to-grayscale-800/70 backdrop-blur-sm border border-grayscale-700/50 rounded-2xl p-6 hover:border-primary-400/50 transition-all duration-300"
                >
                  {/* Icon Container */}
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-600/30 to-primary-500/30 backdrop-blur-sm border border-primary-400/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={skill.icon}
                        alt={skill.title}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                  
                  {/* Skill Title */}
                  <h3 className="text-lg font-semibold text-white text-center mb-3 group-hover:text-primary-400 transition-colors duration-300">
                    {skill.title}
                  </h3>
                  
                  {/* Skill Description */}
                  <p className="text-sm text-grayscale-100 text-center leading-relaxed group-hover:text-primary-300 transition-colors duration-300">
                    {skill.description}
                  </p>
                  
                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-400/0 via-primary-400/20 to-primary-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </m.div>
              ))}
            </m.div>
            
            {/* Tech Stack Categories */}
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Frontend Technologies */}
              <m.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-blue-600/20 to-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-blue-300 mb-6 text-center">Frontend</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-grayscale-100">React.js & Next.js</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-grayscale-100">HTML5 & CSS3</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-grayscale-100">JavaScript (ES6+)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-grayscale-100">Tailwind CSS</span>
                  </div>
                </div>
              </m.div>
              
              {/* Backend Technologies */}
              <m.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-br from-green-600/20 to-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-green-300 mb-6 text-center">Backend</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-grayscale-100">Node.js & Express.js</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-grayscale-100">RESTful APIs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-grayscale-100">Microservices</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-grayscale-100">Authentication</span>
                  </div>
                </div>
              </m.div>
              
              {/* Database & DevOps */}
              <m.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-gradient-to-br from-purple-600/20 to-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-purple-300 mb-6 text-center">Database & Cloud</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-grayscale-100">MongoDB & PostgreSQL</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-grayscale-100">AWS Cloud Services</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-grayscale-100">Docker & Git</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-grayscale-100">CI/CD Pipelines</span>
                  </div>
                </div>
              </m.div>
            </div>
          </LazyMotion>
        </div>
      </div>
    </div>
  );
};

export default Skills;
