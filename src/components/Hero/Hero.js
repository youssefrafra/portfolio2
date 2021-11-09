import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Bienvenue Sur <br />
          Mon Portfolio Personnel
        </SectionTitle>
        <SectionText>
          Actuellement à la recherche d'un <strong>stage</strong> ou d'une <strong>alternance</strong> dans les postes suivants:
          <strong> Data Scientist</strong>,{" "}
          <strong> Data Analyst</strong>,
          <strong> Data Engineer</strong>.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
