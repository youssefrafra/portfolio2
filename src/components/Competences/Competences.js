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
const percent = {"CPP": 30, 
                "Reactjs": 60,
                "Js": 85, 
                "Rails": 80, 
                "Ruby": 85, 
                "Node": 60, 
                "Html": 85,
                "Css": 80,
                "SQL": 60,
                "Python": 75,
                "MongoDB": 40}

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
      percent={percent.Reactjs}
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
      percent={percent.Rails}
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
      percent={percent.Js}
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
      percent={percent.Python}
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
      percent={percent.Ruby}
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
      percent={percent.Node}
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
      percent={percent.Html}
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
      percent={percent.Css}
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
      percent={percent.SQL}
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
      percent={percent.MongoDB}
      status="MongoDB"
      theme={{
        MongoDB: {
          symbol: "MongoDB",
          color: "#23d400",
        },
      }}
    />
    <Progress
      type="circle"
      width={90}
      strokeWidth={2}
      percent={percent.CPP}
      status="CPP"
      theme={{
        CPP: {
          symbol: "C++",
          color: "#cd00d4",
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
