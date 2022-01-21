import React from 'react';

import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { Img } from './AccomplishmentsStyles';

const Accomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Img
      src="https://github-readme-stats.vercel.app/api?username=StnsGeneral&show_icons=true&theme=vision-friendly-dark"
      alt="stats"
    />
  </Section>
);

export default Accomplishments;
