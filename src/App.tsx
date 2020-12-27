import React from "react";

import FirstAndSecond from "./components/FirstAndSecond";

import { GlobalStyles } from "./styles/GlobalStyles";
import { Main, Section, Sticky } from "./styles";
import Header from "./components/Header";

export const App: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <GlobalStyles />

      <Header />

      <Main style={{ height: "1600vh" }}>
        <Section style={{ height: "72.7%" }}>
          <FirstAndSecond />
        </Section>

        <Section style={{ height: "9.7%" }}>
          <Sticky className="third" />
        </Section>

        <Section style={{ height: "10.1% " }}>
          <Sticky className="fourth " />
        </Section>
      </Main>
    </>
  );
};

// Using framer-motion
// aimations with css
// styled-components
// ReactJS
