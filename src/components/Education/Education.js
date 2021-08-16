import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './EducationStyles';

const data = [
  { date: 2013, text: 'CPGE MPSI Condorcet à Lens'},
  { date: 2014, text: 'CPGE MP Robespierre à Arras', },
  { date: 2019, text: 'Licence de Maths à Lille 1', },
  { date: 2021, text: 'Le Wagon Bootcamp à Lille', }
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
