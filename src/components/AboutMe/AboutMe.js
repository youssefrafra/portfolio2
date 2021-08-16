import React from "react";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

const AboutMe = () => {
return (
  <Section id="about">
    <SectionTitle>À propos de moi</SectionTitle>
    <SectionText>
      The purpose of JavaScript Mastery is to help aspiring and established
      developers to take their development skills to the next level and build
      awesome apps.
    </SectionText>
    <SectionDivider />
  </Section>
)};

export default AboutMe;
