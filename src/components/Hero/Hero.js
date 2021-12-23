import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          Jamil's Portfolio
        </SectionTitle>
        <SectionText>
        Trying to be a good human.Love to develop useful UI with impressive UX, Js, React, Vue with savour of backend [ Django-python ] and cloud [AWS] integration .
        </SectionText>
        <Button onClick={props.handleClick}>Know More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;