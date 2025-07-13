/*
   Copyright (C), 2023-2024, Atindra Raut
   Author: Sara Echeverria
   FileName: About.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import { m, LazyMotion, domAnimation } from "framer-motion";
import SectionTitle from "../Components/SectionTitle";
import { memoji } from "../Constants/constants";
import { introduction } from "../Constants/constants";
import ImageSlider from "../Components/elements/ImageSlider";

const About = () => {
  return (
    <div id="about" className="w-full flex justify-center overflow-hidden-web">
      <div className="w-full xl:w-[70%] flex flex-col pb-16">
        <div className="w-full">
          <SectionTitle title="ABOUT ME" subtitle="Get to know me" />
        </div>
        
        {/* Main Content Grid */}
        <div className="w-full grid lg:grid-cols-2 gap-12 mt-12">
          
          {/* Left Column - Profile & Description */}
          <LazyMotion features={domAnimation} strict>
            <m.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="flex flex-col gap-8"
            >
              {/* Profile Card */}
              <div className="bg-gradient-to-br from-primary-900/40 to-primary-800/40 backdrop-blur-sm border border-primary-400/30 rounded-2xl p-8">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 flex items-center justify-center text-white text-2xl font-bold">
                    AR
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-grayscale-50">Atindra Raut</h3>
                    <p className="text-primary-400 text-lg">Full-Stack Developer</p>
                  </div>
                </div>
                
                <p className="text-grayscale-100 leading-relaxed text-lg">
                  "Experienced Full-Stack Developer with 3+ years of expertise in Node.js, Express.js, 
                  and modern JavaScript frameworks. Specialized in building scalable web applications, 
                  RESTful APIs, and microservices architecture. Proficient in both SQL and NoSQL databases, 
                  cloud deployment on AWS, and implementing DevOps practices for efficient development workflows."
                </p>
              </div>

              {/* Experience Highlights */}
              <div className="bg-gradient-to-br from-grayscale-900/70 to-grayscale-800/70 backdrop-blur-sm border border-grayscale-700/50 rounded-2xl p-8">
                <h4 className="text-xl font-semibold text-grayscale-50 mb-6">Experience Highlights</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-primary-400 rounded-full"></div>
                    <span className="text-grayscale-50">3+ years in Full-Stack Development</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-primary-400 rounded-full"></div>
                    <span className="text-grayscale-50">Node.js, Express.js & RESTful APIs</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-primary-400 rounded-full"></div>
                    <span className="text-grayscale-50">MongoDB, PostgreSQL & Database Design</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-primary-400 rounded-full"></div>
                    <span className="text-grayscale-50">AWS Cloud Services & DevOps</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-primary-400 rounded-full"></div>
                    <span className="text-grayscale-50">React.js & Modern Frontend Technologies</span>
                  </div>
                </div>
              </div>
            </m.div>
          </LazyMotion>

          {/* Right Column - Stats & Skills */}
          <LazyMotion features={domAnimation} strict>
            <m.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, type: "spring", delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-primary-600/40 to-primary-500/40 backdrop-blur-sm border border-primary-400/50 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-primary-400 mb-2">25+</div>
                  <div className="text-sm text-grayscale-100 font-semibold">Projects Completed</div>
                </div>
                
                <div className="bg-gradient-to-br from-green-600/40 to-green-500/40 backdrop-blur-sm border border-green-400/50 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-primary-400 mb-2">100%</div>
                  <div className="text-sm text-grayscale-100 font-semibold">Client Satisfaction</div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-600/40 to-blue-500/40 backdrop-blur-sm border border-blue-400/50 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-primary-400 mb-2">3+</div>
                  <div className="text-sm text-grayscale-100 font-semibold">Years Experience</div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-600/40 to-purple-500/40 backdrop-blur-sm border border-purple-400/50 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-primary-400 mb-2">10+</div>
                  <div className="text-sm text-grayscale-100 font-semibold">Technologies</div>
                </div>
              </div>

              {/* Education & Certifications */}
              <div className="bg-gradient-to-br from-grayscale-900/70 to-grayscale-800/70 backdrop-blur-sm border border-grayscale-700/50 rounded-2xl p-8">
                <h4 className="text-xl font-semibold text-grayscale-50 mb-6">Education & Certifications</h4>
                <div className="space-y-6">
                  <div>
                    <h5 className="text-lg font-medium text-primary-400">Bachelor's in Computer Science</h5>
                    <p className="text-grayscale-100 text-sm">Specialization in Software Engineering • 2020-2024</p>
                  </div>
                  <div>
                    <h5 className="text-lg font-medium text-primary-400">AWS Cloud Practitioner</h5>
                    <p className="text-grayscale-100 text-sm">Cloud Solutions & Infrastructure</p>
                  </div>
                  <div>
                    <h5 className="text-lg font-medium text-primary-400">Full-Stack JavaScript Developer</h5>
                    <p className="text-grayscale-100 text-sm">MERN Stack Specialization</p>
                  </div>
                </div>
              </div>
            </m.div>
          </LazyMotion>
        </div>
      </div>
    </div>
  );
};

export default About;
