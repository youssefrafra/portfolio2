import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  LanguageBox,
} from "./CompetencesStyles";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import { competences } from "../../constants/constants";

const Competences = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Compétences</SectionTitle>
    <SectionText>
      Pendant les 9 semaines intensives du Bootcamp Le Wagon j'ai appris HTML,
      CSS, JS, ES6, PostgreSQL, SQL, Git/Github, Heroku, AJAX, Ruby, Ruby on
      Rails.
    </SectionText>
    <LanguageBox>
      {competences.map((comp, index) => {
        return (
          <Progress
            key={index}
            type="circle"
            width={100}
            percent={comp.percent}
            strokeWidth={2}
            status="theme"
            theme={{
              theme: {
                symbol: comp.name,
                color: comp.color,
              },
            }}
          />
        );
      })}
    </LanguageBox>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience avec <br />
            React.js et Ruby on Rails
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience avec <br />
            Node et Ruby on Rails
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience avec <br />
            des outils comme Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Competences;
