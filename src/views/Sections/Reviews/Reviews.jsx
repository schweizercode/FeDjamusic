import React from "react";
import PropTypes, { element, elementType } from "prop-types";

import { Row, CarouselItem } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'

import Image from "components/Image";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import "./Reviews.scss";


const Reviews = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, reviews } = frontmatter;

  
  return (

    <PageSection
      className={className}
      id={anchor}>
      
      <Row>
        <SectionHeader
          header={rootHeader}
          subheader={rootSubHeader} />
      </Row>

        <Carousel className="carousel">

        {reviews.map(review => {
            
        return (
                      
          <CarouselItem type="radio"
            key={reviews.content}
            imageFileName={reviews.image}
            location={reviews.location}
          >
          
            <Image>{reviews.image}</Image>
         
            <p> {review.content} </p>
            <h4>{review.name}</h4>
            <p>{review.location}</p>
       
          </CarouselItem>
        )
         
                  })
                  }
            
              </Carousel>

    </PageSection>
  );
};

Reviews.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Reviews.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Reviews;
