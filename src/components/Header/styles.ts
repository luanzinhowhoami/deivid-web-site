import styled from "styled-components";

// Header

import { motion } from "framer-motion";

export const Container = styled(motion.header)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 13%;

  width: 100%;
  height: 100px;
  background: transparent;

  position: fixed;
  top: 0;
  z-index: 99999;

  ul {
    display: flex;

    li {
      position: relative;
      color: white;
      margin: 0 10px;
      list-style: none;

      overflow: hidden;

      transition: ease-in 0.3s;

      a {
        text-decoration: none;
        color: #dddddd;

        font-size: 27px;
        font-weight: 700;
        font-family: --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      }
    }
  }
`;

export const Logo = styled.h1`
  font-size: 35px;
  font-family: "Langar", cursive;
  color: white;

  a {
    text-decoration: none;
    background: linear-gradient(
      0deg,
      rgba(34, 193, 195, 1) 0%,
      rgba(253, 187, 45, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
