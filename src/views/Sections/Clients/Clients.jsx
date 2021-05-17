import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row, Col } from "react-bootstrap";
import PageSection from "components/PageSection";
import Client from "components/Client";
import Carousel from 'react-bootstrap/Carousel';


const Clients = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, clients } = frontmatter;

  return (
    <PageSection className={clsx("py-5", className)} id={anchor}>
      <Row>
        <Carousel>
        {clients.map(({ href, imageFileName }) => (
          
          <Col md={3} sm={4} className="my-3" key={imageFileName}>
            <Client href={href} imageFileName={imageFileName} />
            </Col>
            
        ))}
          </Carousel>
      </Row>
    </PageSection>
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
