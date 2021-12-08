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
        On the way to be an Software engineer.Always love to develop useful UI with impressive UX, Js, React, Vue with savour of backend [ Django-python ] integration .
        </SectionText>
        <Button onClick={props.handleClick}>Grow More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;