import React from "react";
// import {
//   AiFillCode,
//   AiFillGithub,
//   AiFillInstagram,
//   AiFillLinkedin,
// } from "react-icons/ai";

// import { SocialIcons } from "../Header/HeaderStyles";
import {
  // CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper id="contact">
      <LinkList>
        <LinkColumn>
          <LinkTitle>Phone</LinkTitle>
          <LinkItem href="tel:+33686301975">(+33)6 86 30 19 75</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:rafrafi.youssef@hotmail.com">
            rafrafi.youssef@hotmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        {/* <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer> */}
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
