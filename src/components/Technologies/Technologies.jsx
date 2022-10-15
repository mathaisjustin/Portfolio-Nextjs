import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
  <SectionDivider />
  <br />
  <br />
  <br />
  <SectionTitle>Technologies</SectionTitle>
  <SectionText> 
  I have worked with various technologies in the world of web development, ranging from back-end to design.
  </SectionText>
  <List>
    <ListItem>
      <DiReact size="3rem" />
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
        Worked with React.js and <br /> 
        gained more insight into <br />
        SEO
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiFirebase size="3rem" />
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
        Furthermore got exposure with<br />
          Node and Databases
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiZend size="3rem" />
      <ListContainer>
        <ListTitle>Hosting</ListTitle>
        <ListParagraph>
        Got involved with Firebase <br /> 
        and other cloud platforms
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
  </Section> 
);

export default Technologies;
