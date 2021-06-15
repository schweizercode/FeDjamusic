import React from "react";
import PropTypes, { elementType } from "prop-types";
import { Row, Col, CarouselItem } from "react-bootstrap";
import TimelineItem from "components/TimelineItem";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import nl2br from "utils/nl2br";
import TeamMember from 'components/TeamMember';

import Carousel from 'react-bootstrap/Carousel'

import "./Reviews.scss";

const Reviews = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, reviews, content } = frontmatter;
console.log(reviews)
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
              
              <Carousel>
                  {reviews.map(review => {
                      return (<Carousel.Item key={review.content}>
                          <h3>{review.author}</h3>
                          <p> {review.content}</p>
                          <p> {review.source}</p>
                      </Carousel.Item>)
                  })
                  }
            
              </Carousel>
              
 
       
        
      </Row>
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
