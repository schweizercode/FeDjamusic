import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row, Col } from "react-bootstrap";
// import PageSection from "components/PageSection";
import Client from "components/Client";
import Carousel from 'react-bootstrap/Carousel';

import "./Clients.scss"


const Clients = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, clients } = frontmatter;

  return (
                   
    <div className="clients">
      <div>
        <p className="trusted">Trusted by</p>
      </div>

          <Carousel>
          {clients.map(({ href, imageFileName }) => (

            <Carousel.Item key={imageFileName}>
              <Client href={href} imageFileName={imageFileName} />
              </Carousel.Item>
        ))}

        </Carousel>
       
    </div> 

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
