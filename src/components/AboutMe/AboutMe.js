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
      Après une Licence en Maths et étant passionné par le métier j'ai décidé de me reconvertir 
      dans le métier de développeur web. Autonome de nature, je peux travailler seul ou en groupe, 
      capable de m’adapter à un environnement que je ne connais pas en cherchant toujours à améliorer et optimiser 
      les projets au maximum pour satisfaire au mieux la demande du client.
    </SectionText>
    <SectionDivider />
  </Section>
)};

export default AboutMe;
