import React from "react";
import PropTypes from "prop-types";
import Image from "components/Image";
import "./Reviews.scss";
import { Carousel } from "react-bootstrap";

const reviews = ({
  image,
  content,
  name,
  location,
}) => {

  
  return (
    <>
      <Carousel className="items">
        <Carousel.Item>
        <Image>{image}</Image>
        <p> {content}</p>
        <h4> {name}</h4>
        <p> {location} </p>
       </Carousel.Item>
      </Carousel>

    </>
  
  );
};

reviews.propTypes = {
  image: PropTypes.string.isRequired,
  content: PropTypes.string,
  name: PropTypes.string,
  location: PropTypes.string,
};

reviews.defaultProps = {
  image: "",
  content: "",
  name: "",
  location: "",
};

export default reviews;
