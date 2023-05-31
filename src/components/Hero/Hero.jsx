import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, I'm <br />
        Justin Mathais
      </SectionTitle>
      <SectionText>
        I am a enthusiast for building web and mobile based application.
      </SectionText>
      <Button><a href="/assets/Resume.pdf" alt="Resume" target="_blank" rel="noopener noreferrer">Download Resume</a></Button>
    </LeftSection>
  </Section>
);

export default Hero;