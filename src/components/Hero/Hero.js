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
          Actuellement à la recherche d'un contrat CDI dans les postes suivants:
          <strong> Dévellopeur Full-Stack</strong>,{" "}
          <strong> Dévellopeur Front-End</strong>,
          <strong> Dévellopeur Back-End</strong>.
        </SectionText>
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;
