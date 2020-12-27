import React from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";

import { Sticky } from "../../styles";

import { Image } from "@chakra-ui/react";

import image1 from "../../images/image1.jpeg";
import image2 from "../../images/image2.jpeg";
import image3 from "../../images/image3.jpeg";
import image4 from "../../images/image4.jpeg";

const FirstAndSecond: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();

  const frameOpacity = useTransform(scrollYProgress, [0.196, 0.198], [0, 1]);

  const frameScale = useTransform(
    scrollYProgress,
    [0.558, 0.627],
    [0.511, 0.8]
  );

  return (
    <Sticky className="second">
      <First />
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "100vh",
          borderRadius: "4px",
          border: "4px solid #ffff",
          opacity: frameOpacity,
          scale: frameScale,
        }}
      />
    </Sticky>
  );
};

const First: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();

  const firstScale = useTransform(
    scrollYProgress,
    [0.198, 0.264, 0.558, 0.627],
    [1, 0.511, 0.511, 1]
  );
  const firstRadius = useTransform(
    scrollYProgress,
    [0.198, 0.264, 0.558, 0.627],
    [0, 4, 4, 0]
  );

  const leftSideHieght = useTransform(
    scrollYProgress,

    [0, 0.058],
    ["20vh", "100vh"]
  );

  const rightSideScale = useTransform(
    scrollYProgress,
    [0.047, 0.093],
    [0, 0.511]
  );
  const rightSideY = useTransform(
    scrollYProgress,
    [0.047, 0.093],
    ["45vh", "0vh"]
  );

  const offsetY = useTransform(
    scrollYProgress,
    [0.328, 0.397, 0.461, 0.53],
    ["0%", "-100%", "-100%", "-200%"]
  );

  return (
    <Sticky
      className="first"
      style={{ scale: firstScale, borderRadius: firstRadius }}
    >
      <motion.div className="offset" style={{ y: offsetY }}>
        <div className="a">
          <motion.div className="left-side" style={{ height: leftSideHieght }}>
            <Image src={image4} alt="Left Side" />
          </motion.div>

          <div className="right-side">
            <motion.div
              className="right-image"
              style={{ y: rightSideY, scaleY: rightSideScale }}
            >
              <Image src={image1} alt="Right Image" />
            </motion.div>
          </div>
        </div>
        <div className="b">
          <Image src={image2} alt="B" />
        </div>
        <div className="c">
          <Image src={image3} alt="C" />
        </div>
      </motion.div>
    </Sticky>
  );
};

export default FirstAndSecond;
