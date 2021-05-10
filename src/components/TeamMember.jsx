import React from "react";
import PropTypes from "prop-types";
import Image from "components/Image";
import * as SocialIcons from "components/SocialIcons";
import "./TeamMember.scss";
import { Col } from "react-bootstrap";

const TeamMember = ({
  imageFileName,
  imageAlt,
  header,
  subheader,
  content,
  social: { twitter, facebook, linkedin, github, medium },
}) => {

  return (
    <>
      <Col xs={4}>
        <Image
        className="mx-auto circle rounded-circle"
        fileName={imageFileName}
        alt={imageAlt || header || subheader}
      />
      <h4>{header}</h4>
        <p className="text-muted">{subheader}</p>
      </Col>

      <Col xs={8}>
      <p className="text-muted">{content}</p>
      </Col>
    </>
  
  );
};

TeamMember.propTypes = {
  imageFileName: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
  content: PropTypes.string,
  social: PropTypes.shape({
    twitter: PropTypes.string,
    facebook: PropTypes.string,
    linkedin: PropTypes.string,
    github: PropTypes.string,
    medium: PropTypes.string,
  }),
};

TeamMember.defaultProps = {
  imageAlt: null,
  header: "",
  subheader: "",
  content: "",
  social: {
    twitter: null,
    facebook: null,
    linkedin: null,
    github: null,
    medium: null,
  },
};

export default TeamMember;
