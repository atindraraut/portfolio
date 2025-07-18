/*
   Copyright (C), 2023-2024, Atindra Raut
   Author: Sara Echeverria
   FileName: SectionTitle.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import { m, LazyMotion, domAnimation } from "framer-motion";

const SectionTitle = (props) => {
  const { title, subtitle } = props;

  return (
    <div style={{ borderBottom: "2px solid #cbbde5" }}>
      <LazyMotion features={domAnimation} strict>
        <m.div
          initial={{ x: -350 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-primary-600 p-6 noselect"
        >
          <span
            className="opacity-50"
            style={{
              textTransform: "uppercase",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "600",
            }}
          >
            {subtitle}
          </span>
          <h2
            className="tracking-wider text-7xl sm:text-8xl md:text-9xl"
            style={{ fontFamily: "Morganite Black" }}
          >
            {title.split("").map((char, index) => {
              if (char === " ") {
                return " ";
              }
              return <span key={index} className="bounce">{char}</span>
            })}
          </h2>
        </m.div>
      </LazyMotion>
    </div>
  );
};

export default SectionTitle;
