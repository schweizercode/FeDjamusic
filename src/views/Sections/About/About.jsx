import React from "react";
import PropTypes, { elementType } from "prop-types";
import { Row, Col } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import TeamMember from 'components/TeamMember';
import "./About.scss";

const About = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, teamMember, content } = frontmatter;

  return (
    <PageSection
      className={className}
      id={anchor}>
      
      <Row>
        <SectionHeader
          header={rootHeader}
          subheader={rootSubHeader} />
      </Row>

      <Row>
       
        {teamMember.map((element =>
            
            <TeamMember
              key={element.header}
              imageFileName={element.imageFileName}
              imageAlt={element.imageAlt}
              header={element.header}
              subheader={element.subheader}
              content={element.content}/>
          ))}
       
        
      </Row>
    </PageSection>
  );
};

About.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

About.defaultProps = {
  className: null,
  frontmatter: null,
};

export default About;
