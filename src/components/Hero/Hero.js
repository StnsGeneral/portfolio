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
      {/* TODO: Need to figure out a way to have learn more do something better than just link to Google */}
      <Button onClick={() => (window.location = 'https://google.com')}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
