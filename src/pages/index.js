import Education from '../components/Education/Education';
import BgAnimation from '../components/BackgroundImg/BackgroundImg';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Competences/Competences';
import AboutMe from '../components/AboutMe/AboutMe';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollButton from "../components/GoToTop/scrollToTop"
import Experience from '../components/Experience/Experience';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Experience/>
      <Projects />
      <Technologies />
      <AboutMe />
      <Education />
      <ScrollButton />
    </Layout>
  );
};

export default Home;
