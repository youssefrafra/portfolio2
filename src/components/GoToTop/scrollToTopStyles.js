import styled from "styled-components";
import { keyframes } from "styled-components";

export const Heading = styled.h1`
  text-align: center;
  color: green;
`;

export const Content = styled.div`
  overflowy: scroll;
  height: 2500px;
`;

export const Button = styled.div`
  position: fixed;
  width: 100%;
  left: 95%;
  bottom: 50px;
  height: 40px;
  font-size: 4rem;
  z-index: 10;
  cursor: pointer;
  color: white;
  @media ${(props) => props.theme.breakpoints.sm} {
    left: 87%;
    bottom: 50px;
    height: 20px;
    font-size: 3rem;
  }
`;

