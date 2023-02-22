import {ExperienceContainer,Heading,
        JobContainer,JobDate,JobDescription, 
        JobTitle} from "./ExperienceStyles.js";
import {
    Section,
    SectionDivider,
    SectionText,
    SectionTitle,
    } from "../../styles/GlobalComponents";
import { experiences } from "../../constants/constants.js";

const Experience = () => {
    return(
        <Section id="exp">
        <SectionDivider divider/>
        <SectionTitle>Expériences Professionnelles</SectionTitle>
        {experiences.map((exp, index1) => {
            return (
                <>
                    <JobContainer key={index1}>
                        <JobTitle>{exp.jobTitle}</JobTitle>
                        <JobDate>{exp.jobDate}</JobDate>
                        <JobDescription>
                            {exp.jobDesc.map((desc,index2) => <li key={index2}>{desc}</li>)}
                        </JobDescription>
                    </JobContainer>
                </>
                    )
                }   
            )
        }
    </Section>
    )
  };
  
  export default Experience;