import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row, Col, Container } from "react-bootstrap";
// import PageSection from "components/PageSection";
import Client from "components/Client";
import Carousel from 'react-bootstrap/Carousel';

import "./Clients.scss"


const Clients = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, clients } = frontmatter;

  console.log(clients)
  
  return (

  <Container className="clients">
    <div >
        <p className="trusted">Trusted by</p>
    </div>
    <Row className="clientsrow">
          {clients.map(({ href, imageFileName }) => (

            <Col  key={imageFileName}>
              <Client className="companies" href={href} imageFileName={imageFileName} />
              </Col>
        ))}
      </Row>
      
    </Container>
    
  );
};

Clients.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Clients.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Clients;
