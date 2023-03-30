import styled from "styled-components";

export const BackgroundImgContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.30),
      rgba(0, 0, 0, 0.50)
    ),
    url("/images/img-profile.jpeg");
  background-position: top;
  background-size: cover;
  z-index: -1;
  border-radius: 500px;
  width: 400px;
  height: 400px;
  @media ${(props) => props.theme.breakpoints.sm } {
    width: 80px;
    height: 80px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 180px;
    height: 180px;
  }
`;
