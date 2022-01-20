import React from 'react';

import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles';

const data = [
  { number: 16, text: 'Open Source Projects' },
  { number: 103, text: 'Commits this year' },
  { number: 10, text: 'Github Followers' },
  { number: 0, text: 'Github Stars' },
];

const Accomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      <img
        src="https://github-readme-stats.vercel.app/api?username=StnsGeneral&show_icons=true&theme=vision-friendly-dark"
        alt="stats"
      />
    </Boxes>
  </Section>
);

export default Accomplishments;
