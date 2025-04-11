/*
   Copyright (C), 2023-2024, Sara Echeverria (titu)
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
          <SectionTitle title="ABOUT ME" subtitle="Introduction" />
        </div>
        <div className="w-full flex flex-col-reverse sm:flex-row gap-9">
          <div className="w-full md:w-[50%] md:h-full items-center mt-10 p-6">
            <div className="flex sm:flex-row w-full" style={{borderBottom:"2px solid #cbbde5"}}>
              <div className=" sm:flex text-grayscale-50 p-6 gap-6">
                <h1 className="text-7xl	">15</h1>
                <h6 className="text-2xl	">+</h6>
              </div>
              <div className="text-grayscale-50 p-6 flex flex-col gap-2 ">
                <div className="text-3xl	">Project Worked</div>
                <div>Versatile solutions to complex coding problems. </div>
              </div>
            </div>
            <div className="flex sm:flex-row w-full" style={{display:"flex",borderBottom:"2px solid #cbbde5"}}>
              <div className=" sm:flex text-grayscale-50 p-6 gap-6 ">
                <h1 className="text-7xl	">95</h1>
                <h6 className="text-2xl	">%</h6>
              </div>
              <div className="text-grayscale-50 p-6 flex flex-col gap-2 ">
                <div className="text-3xl	">Client Satisfaction level</div>
                <div>Developer with emphasis on efficient coding. </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[50%] md:h-full flex items-center">
            <LazyMotion features={domAnimation} strict>
              <m.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                style={{ fontFamily: "Poppins, sans-serif" }}
                className=" p-6 flex flex-col gap-6"
              >
                <span className="text-primary-800 text-lg">
                  "As a multi-faceted programmer, I am efficient in multiple
                  coding languages. My work spans across multinational
                  corporations, where I've made significant contributions
                  towards software development. Bringing solution-orientated
                  mind with me, I aim for the optimal use of resources while
                  coding, ensuring software efficiency. "
                </span>
              </m.p>
            </LazyMotion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
