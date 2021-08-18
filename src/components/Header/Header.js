import Link from 'next/link';
import React from 'react';
import { AiFillCode, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaDev } from 'react-icons/fa';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, LinkListItem } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <FaDev size="3rem" style={{marginRight: "5px"}}/> <span>RAFRAFI YOUSSEF</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <LinkListItem>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </LinkListItem>
      <LinkListItem>
        <Link href="#tech">
          <NavLink>Compétences</NavLink>
        </Link>
      </LinkListItem>        
      <LinkListItem>
        <Link href="#about">
          <NavLink>À propos</NavLink>
        </Link>
      </LinkListItem>        
      <LinkListItem>
        <Link href="#contact">
          <NavLink>Contact</NavLink>
        </Link>
      </LinkListItem>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/youssefrafra">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/youssefrafrafi/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.codewars.com/users/youssefrafra">
          <AiFillCode size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
