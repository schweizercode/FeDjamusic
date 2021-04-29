import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PortfolioItem from "components/PortfolioItem";
import PageSection from "components/PageSection";
import "./Gigs.scss";

const Gigs = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, gigs } = frontmatter;

  return (
    <PageSection className={clsx("portfolio-section", className)} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row>
        {gigs.map(
          ({ content, extraInfo, header, videoUrl, imageFileNameDetail, subheader }) => (
            <PortfolioItem
              key={header}
              videoUrl={videoUrl}
              header={header}
              subheader={subheader}
              content={content}
              imageFileNameDetail={imageFileNameDetail}
              extraInfo={
                <ul>
                  {extraInfo.map((ei) => (
                    <li key={ei}>{ei}</li>
                  ))}
                </ul>
              }
            />
          ),
        )}
      </Row>
    </PageSection>
  );
};

Gigs.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Gigs.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Gigs;
