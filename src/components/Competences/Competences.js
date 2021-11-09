import React from "react";
import { DiFirebase, DiReact, DiZend} from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
// import ProgressBar from "react-bootstrap/ProgressBar";
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
const Reactjs = 60;
const Js = 85;
const Rails = 80;
const Ruby = 90;
const Node = 60;
const Html = 90;
const Css = 80;
const SQL = 80;
const Python = 75;
const MongoDB = 25;

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
    <Progress
      type="circle"
      style={{color: 'white',}}
      width={90}
      percent={Reactjs}
      strokeWidth={2}
      status="Reactjs"
      theme={{
        Reactjs: {
          symbol: "ReactJs",
          color: "#49f2f2",
        },
      }}
    />
    <Progress
      type="circle"
      width={90}
      strokeWidth={2}
      percent={Rails}
      status="Rails"
      theme={{
        Rails: {
          symbol: "Rails",
          color: "#ff2b2b",
        },
      }}
    />
    <Progress
      type="circle"
      width={90}
      strokeWidth={2}
      percent={Js}
      status="JS"
      theme={{
        JS: {
          symbol: "JS",
          color: "#fbc630",
        },
      }}
    />
    <Progress
      type="circle"
      width={90}
      strokeWidth={2}
      percent={Python}
      status="Python"
      theme={{
        Python: {
          symbol: "Python",
          color: "#49f2f2",
        },
      }}
    />
    <Progress
      type="circle"
      width={90}
      strokeWidth={2}
      percent={Ruby}
      status="Ruby"
      theme={{
        Ruby: {
          symbol: "Ruby",
          color: "#ff2b2b",
        },
      }}
    />
    <Progress
      type="circle"
      width={90}
      strokeWidth={2}
      percent={Node}
      status="Node"
      theme={{
        Node: {
          symbol: "Node",
          color: "#23d400",
        },
      }}
    />
    <Progress
      type="circle"
      width={90}
      strokeWidth={2}
      percent={Html}
      status="Html"
      theme={{
        Html: {
          symbol: "HTML",
          color: "#0007d4",
        },
      }}
    />
    <Progress
      type="circle"
      width={90}
      strokeWidth={2}
      percent={Css}
      status="Css"
      theme={{
        Css: {
          symbol: "CSS",
          color: "#cd00d4",
        },
      }}
    />
    <Progress
      type="circle"
      width={90}
      strokeWidth={2}
      percent={SQL}
      status="SQL"
      theme={{
        SQL: {
          symbol: "SQL",
          color: "#8192a1",
        },
      }}
    />
    <Progress
      type="circle"
      width={90}
      strokeWidth={2}
      percent={MongoDB}
      status="MongoDB"
      theme={{
        MongoDB: {
          symbol: "MongoDB",
          color: "#23d400",
        },
      }}
    />
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
