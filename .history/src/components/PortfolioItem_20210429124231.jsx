/* eslint-disable jsx-a11y/media-has-caption */
import React from "react";
import PropTypes from "prop-types";
import { Col } from "react-bootstrap";
import Image from "components/Image";
import Icon from "components/Icon";
import PortfolioDetailDialog from "components/PortfolioDetailDialog";
import { graphql, useStaticQuery } from 'gatsby'

import "./PortfolioItem.scss";

const PortfolioItem = ({
  videoUrl,
  imageAlt,
  header,
  subheader,
  content,
  imageFileNameDetail,
  imageAltDetail,
  extraInfo,
}) => {
  const [showDetail, setShowDetail] = React.useState(false);
  const handleShowDetail = React.useCallback(() => {
    setShowDetail(true);
  }, []);
  const handleHideDetail = React.useCallback(() => {
    setShowDetail(false);
  }, []);

  const query = graphql`
  {
    vimeo(link: { eq: "https://vimeo.com/315401283/dfd80bf8c1" }) {
      name
      description
      duration
      link
      aspectRatio
      width
      height
      srcset {
        ...GatsbyVimeoSrcSet
      }
      pictures {
        uri
      }
      user {
        name
      }
    }
  }
`

  return (
    <>
      <Col md={4} sm={6} className="portfolio-item">
        <a
          role="button"
          tabIndex={-1}
          className="portfolio-link"
          data-toggle="modal"
          onClick={handleShowDetail}
        >
          {/* <Image
            className="img-fluid"
            fileName={imageFileName}
            alt={imageAlt || header || subheader}
          /> */}
      
          <iframe src={`https://player.vimeo.com/video/${videoUrl}`}
            width="349" height="1138" frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture" allowFullScreen
          title={header}/>

          
          {/* <div className="portfolio-hover">
            <div className="portfolio-hover-content">
              <Icon iconName="PlusIcon" size="2x" />
            </div>
          </div> */}
        </a>
        <div className="portfolio-caption">
          <h4>{header}</h4>
          {subheader ? <p className="text-muted">{subheader}</p> : null}
        </div>
      </Col>
      <PortfolioDetailDialog
        show={showDetail}
        onHide={handleHideDetail}
        imageFileName={imageFileNameDetail}
        imageAlt={imageAltDetail || imageAlt}
        header={header}
        subheader={subheader}
        content={content}
        extraInfo={extraInfo}
      />
    </>
  );
};

PortfolioItem.propTypes = {
  videoUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string,
  content: PropTypes.string,
  imageFileNameDetail: PropTypes.string,
  imageAltDetail: PropTypes.string,
  extraInfo: PropTypes.any,
};

PortfolioItem.defaultProps = {
  imageAlt: "",
  subheader: "",
  content: "",
  imageFileNameDetail: "",
  imageAltDetail: "",
  extraInfo: null,
};

export default PortfolioItem;
