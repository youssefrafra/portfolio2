import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './EducationStyles';

const data = [
  { date: 2012, text: 'Baccalauréat scientifique mention Bien'},
  { date: 2020, text: 'Licence de Maths à Lille 1'},
  { date: 2021, text: 'Le Wagon Bootcamp à Lille'},
  { date: 2023, text: 'IA School de Paris, parcours Data Scientist'}
];

const Education = () => (
  <Section>
    <SectionTitle>Éducation</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.date}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Education;
