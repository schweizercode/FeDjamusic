import React from "react";
import PropTypes from "prop-types";

import { Button } from 'react-bootstrap';

import CircleFAButton from "components/CircleFAButton";
import Image from "components/Image";
import "./ServiceItem.scss";

const ServiceItem = ({ iconName, imageFileName, header, content, button }) => {
  let iconPart;
  if (iconName) {
    iconPart = <CircleFAButton iconName={iconName} />;
  }

  let imagePart;
  if (imageFileName) {
    imagePart = <Image className="service-item-image" fileName={imageFileName} />;
  }

  let buttonPart;
  if (button) {
    buttonPart = <Button button={button} />;
  }

  return (
    <>
      {iconPart}
      {imagePart}
      <h4 className="service-item-heading">{header}</h4>
      <p className="text-muted">{content}</p>
    </>
  );
};

ServiceItem.propTypes = {
  iconName: PropTypes.string,
  imageFileName: PropTypes.string,
  header: PropTypes.string,
  content: PropTypes.string,
  button: PropTypes.string,
};

ServiceItem.defaultProps = {
  iconName: null,
  imageFileName: null,
  header: "",
  content: "",
  button: "",
};

export default ServiceItem;
