import styled from 'styled-components';
import _default from '../../themes/default';

export const ExperienceContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
`;

export const Heading = styled.h2`
  font-size: 2rem;
  text-align: center;
`;

export const JobContainer = styled.div`
  background-color: ${_default.colors.background1};
  padding: 1rem;
//   word-wrap: break-word;
  margin-bottom: 1rem;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  transition: 0.8s;
  &:hover {
    color: white;
    transform: scale(1.02);
  }
`;

export const JobTitle = styled.h3`
  font-size: 2.5rem;
  width: max-content;
  word-wrap: break-word;
  margin-bottom: 0.5rem;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${props => props.theme.breakpoints.md}{
    font-size: 1.6rem;
    width: 100%;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 1.6rem;
    width: 100%;
  }
`;

export const JobDate = styled.p`
  font-size: 2rem;
  font-style: italic;
  margin-bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.5);
  @media ${props => props.theme.breakpoints.md}{
    font-size: 1.2rem;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 1.2rem;
  }
`;

export const JobDescription = styled.ul`
    font-size: 1.5rem;
    color: rgba(255, 255, 255, 0.8);
    margin-top: 0.5rem;
    list-style-type: none;
    padding-left: 0;
    & > li {
        position: relative;
        padding-left: 2rem;
        margin-bottom: 0.5rem;
    }
    & > li:before {
        content: "";
        position: absolute;
        left: 0.2rem;
        top: 0.7rem;
        border-top: 0.5rem solid transparent;
        border-bottom: 0.5rem solid transparent;
        border-left: 1rem solid rgba(2, 52, 77, 0.50);
        height: 0;
        width: 0;
    }
    @media ${props => props.theme.breakpoints.md}{
        font-size: 1.2rem;
        & > li:before {
            top: 0.4rem;
        }
      }
    
      @media ${props => props.theme.breakpoints.sm}{
        font-size: 1.2rem;
        & > li:before {
            top: 0.4rem;
        }
      }
`;

