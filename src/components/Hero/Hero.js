import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        FullStack Web Developer that is constantly seeking new and exciting
        opportunities to learn new technologies, and to have some fun while
        doing so.
      </SectionText>
      <Button
        onClick={() =>
          (window.location = 'https://linkedin.com/in/tristanalexandermiller')
        }>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
