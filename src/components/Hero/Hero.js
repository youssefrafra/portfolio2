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
          Mon Portfolio
        </SectionTitle>
        <SectionText>
          Actuellement à la recherche d'un <strong>stage alterné ou d'un stage de 6 mois 
          à partir de Juin 2023</strong> dans les postes suivants:
          <strong> Data Scientist</strong>,{" "}
          <strong> Data Analyst</strong>,
          <strong> Data Engineer</strong>.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
