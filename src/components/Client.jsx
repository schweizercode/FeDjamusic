import React from "react";
import PropTypes from "prop-types";
import Image from "components/Image";


const Client = ({ imageFileName, href }) => {
  const imgPart = (
    <Image  fileName={imageFileName} alt={imageFileName}  />
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {imgPart}
        </a>
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
