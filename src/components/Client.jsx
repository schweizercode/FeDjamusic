import React from "react";
import PropTypes from "prop-types";
// import Carousel from 'bootstrap';

import Image from "components/Image";

const Client = ({ imageFileName, href }) => {
  const imgPart = (
    <Image className="img-fluid d-block mx-auto" fileName={imageFileName} alt={imageFileName} />
  );

  if (href) {
    return (
      // <Carousel>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {imgPart}
        </a>
    //  </Carousel>
    );
  }

  return imgPart;
};

Client.propTypes = {
  imageFileName: PropTypes.string.isRequired,
  href: PropTypes.string,
};

Client.defaultProps = {
  href: null,
};

export default Client;
