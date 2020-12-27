import styled from "styled-components";

import { motion } from "framer-motion";

import image5 from "../images/image5.jpeg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";

export const Main = styled.main`
  .first {
    background: #069;
    overflow: hidden;

    .offset {
      width: 100%;
      height: 100%;
    }

    .a {
      background: #121212;
      height: 100%;
      display: flex;
      align-items: flex-end;

      .left-side {
        width: 50%;
        height: 100%;

        img {
          width: 100%;
          height: 100%;
        }
      }
      .right-side {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 100%;
        background: ;
      }
      .right-image {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 50%;

        height: 100%;

        /* background: #7dbb91; */

        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .b {
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .c {
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .second {
    background: url(${image6}) no-repeat;
    background-size: cover;
    background-position-y: 100%;
  }

  .third {
    background: url(${image7}) no-repeat;
    background-size: cover;
    background-position-y: 100%;
  }

  .fourth {
    background: url(${image5}) no-repeat;
    background-size: cover;
    background-position-y: 100%;
  }
`;

export const Section = styled.main`
  position: relative;
`;

export const Sticky = styled(motion.div)`
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
`;
