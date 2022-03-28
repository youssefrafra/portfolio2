import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  ImgContainer
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projets } from "../../constants/constants";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projets Personnels</SectionTitle>
    <GridContainer>
      {projets.map((project, index) => {
        return (
          <BlogCard key={index}>
            <ImgContainer>
              <Img src={project.image} />
            </ImgContainer>
            <TitleContent>
              <HeaderThree title={project.title ? project.title : "Image"}>
                {project.title}
              </HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{project.description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {project.tags.map((tag, index) => {
                  return <Tag key={index}>{tag}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              {project.visit && (
                <ExternalLinks href={project.visit}>Voir</ExternalLinks>
              )}
              {project.source && (
                <ExternalLinks href={project.source}>Code Source</ExternalLinks>
              )}
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;
