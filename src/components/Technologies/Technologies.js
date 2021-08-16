import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import ProgressBar from "react-bootstrap/ProgressBar";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";
const Reactjs = 60;
const Js = 85;
const Rails = 80;
const Ruby = 90;
const Node = 60;
const Html = 90;
const Css = 80;

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Pendant les 9 semaines intensives du Bootcamp Le Wagon j'ai appris HTML,
      CSS, JS, ES6, PostgreSQL, SQL, Git/Github, Heroku, AJAX, Ruby, Ruby on
      Rails.
    </SectionText>
    <ProgressBar
      label={`HTML ${Html}%`}
      style={{
        fontSize: "1.5rem",
        height: "fit-content",
        marginBottom: "5px",
        backgroundColor: "#1e81b0",
      }}
      variant="dark"
      now={Html}
    />
    <ProgressBar
      label={`CSS ${Css}%`}
      style={{
        fontSize: "1.5rem",
        height: "fit-content",
        marginBottom: "5px",
        backgroundColor: "#1e81b0",
      }}
      variant="dark"
      now={Css}
    />
    <ProgressBar
      label={`Ruby ${Ruby}%`}
      style={{
        fontSize: "1.5rem",
        height: "fit-content",
        marginBottom: "5px",
        backgroundColor: "#1e81b0",
      }}
      variant="danger"
      now={Ruby}
    />
    <ProgressBar
      label={`Rails ${Rails}%`}
      style={{
        fontSize: "1.5rem",
        height: "fit-content",
        marginBottom: "5px",
        backgroundColor: "#1e81b0",
      }}
      variant="danger"
      now={Rails}
    />
    <ProgressBar
      label={`Javascript ${Js}%`}
      style={{
        fontSize: "1.5rem",
        height: "fit-content",
        marginBottom: "5px",
        backgroundColor: "#1e81b0",
      }}
      variant="warning"
      now={Js}
    />
    <ProgressBar
      label={`Reactjs ${Reactjs}%`}
      style={{
        fontSize: "1.5rem",
        height: "fit-content",
        marginBottom: "5px",
        backgroundColor: "#1e81b0",
      }}
      now={Reactjs}
    />
    <ProgressBar
      label={`Nodejs ${Node}%`}
      style={{
        fontSize: "1.5rem",
        height: "fit-content",
        marginBottom: "5px",
        backgroundColor: "#1e81b0",
      }}
      variant="success"
      now={Node}
    />
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

export default Technologies;
