import React from "react";

import { useTransform, useViewportScroll } from "framer-motion";

import "./styles.css";

import { Container, Logo } from "./styles";

const Header: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();
  const headerY = useTransform(
    scrollYProgress,
    [0.188, 0.198],
    ["0%", "-100%"]
  );

  return (
    <Container style={{ y: headerY }}>
      <Logo>
        <a href="">Deivid Photograph</a>
      </Logo>
      <ul className="menu">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Photos</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </Container>
  );
};

export default Header;
